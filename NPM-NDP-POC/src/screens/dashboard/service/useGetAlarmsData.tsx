import { useEffect, useState } from "react";
import { BellOutlined, CloseCircleOutlined } from "@ant-design/icons";
import TAlarmConfig from "../../../nirmata-model-schema/Config.TAlarm";
import TAlarmEnvironment from "../../../nirmata-model-schema/Environments.TAlarm";
import TAlarmCluster from "../../../nirmata-model-schema/Cluster.TAlarm";
import TAlarmPolicies from "../../../nirmata-model-schema/Policies.TAlarm";
import TEvent from "../../../nirmata-model-schema/Environments.TEvent";
import { MetricEntry } from "../../../components/dashboard/types";
import { convertToKFormat } from "../utils/utils";
import useQuery from "../../../components/connector/use-query";
import getCookie from "../../../components/connector/get-cookie";

const useGetAlarmsData = () => {
  const [formattedAlarms, setFormattedAlarms] = useState<MetricEntry[]>([]);
  const [configAlarmResponse, configAlarmActions] = useQuery<TAlarmConfig[]>();
  const [environmentAlarmResponse, environmentAlarmActions] =
    useQuery<TAlarmEnvironment[]>();
  const [clusterAlarmResponse, clusterAlarmActions] =
    useQuery<TAlarmCluster[]>();
  const [policiesAlaramResponse, policiesAlaramActions] =
    useQuery<TAlarmPolicies[]>();
  const [violationEventsResponse, violationEventsActions] =
    useQuery<TEvent[]>();
  const [exceptionEventsResponse, exceptionEventsActions] =
    useQuery<TEvent[]>();
  const userData = getCookie("nirmata.session.userData");
  const userRole = (
    JSON.parse(decodeURIComponent(userData ?? "")) as { role: string }
  ).role;

  const loadingAlarm =
    configAlarmResponse?.loading ||
    environmentAlarmResponse?.loading ||
    clusterAlarmResponse?.loading ||
    policiesAlaramResponse?.loading ||
    violationEventsResponse.loading ||
    exceptionEventsResponse.loading;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          configAlarms,
          environmentAlarms,
          clusterAlarms,
          policyAlarms,
          violationEventData,
          exceptionEventData,
        ] = await Promise.all([
          configAlarmActions.onLoad("/config/api/Alarm?fields=severity"),
          environmentAlarmActions.onLoad(
            "/environments/api/Alarm?fields=severity"
          ),
          clusterAlarmActions.onLoad("/cluster/api/Alarm?fields=severity"),
          policiesAlaramActions.onLoad("/policies/api/Alarm?fields=severity"),
          violationEventsActions.onLoad(
            "policies/api/Event?filter=reason,eq,PolicyViolation&fields=id"
          ),
          exceptionEventsActions.onLoad(
            "policies/api/Event?filter=regarding.kind,eq,PolicyException&fields=id"
          ),
        ]);

        const allAlarms = [
          ...(configAlarms?.data ?? []),
          ...(environmentAlarms?.data ?? []),
          ...(clusterAlarms?.data ?? []),
          ...(policyAlarms?.data ?? []),
        ];

        const criticalAlarms = allAlarms.filter(
          (alarm) => alarm.severity === "critical"
        ).length;
        const majorAlarms = allAlarms.filter(
          (alarm) => alarm.severity === "major"
        ).length;

        const violationEventCount = violationEventData?.data?.length;
        const exceptionEventCount = exceptionEventData?.data?.length;

        const alarmData = [
          {
            title: "Critical Alarms",
            value: convertToKFormat(criticalAlarms ?? 0),
            textColor: "#FF4D4F",
            icon: (
              <BellOutlined
                style={{ height: "24px", width: "24px", color: "#FF4D4F" }}
              />
            ),
            link:
              userRole === "admin" ? "#alarms/category/policyViolations" : "",
          },
          {
            title: "Major Alarms",
            value: convertToKFormat(majorAlarms ?? 0),
            textColor: "#FA8C16",
            icon: (
              <BellOutlined
                style={{ height: "24px", width: "24px", color: "#FA8C16" }}
              />
            ),
            link:
              userRole === "admin" ? "#alarms/category/policyViolations" : "",
          },
          {
            title: "Violation Events",
            value: convertToKFormat(violationEventCount ?? 0),
            textColor: "#f5222d",
            icon: (
              <CloseCircleOutlined
                style={{ height: "24px", width: "24px", color: "#f5222d" }}
              />
            ),
            link: userRole === "admin" ? "#events" : "",
          },
          {
            title: "Exception Events",
            value: convertToKFormat(exceptionEventCount ?? 0),
            textColor: "#00000073",
            icon: (
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "25px", width: "25px" }}
              >
                <path
                  d="M12.525 15.7496C13.0813 15.7496 13.6268 15.6403 14.1615 15.4216C14.6962 15.2031 15.166 14.8753 15.571 14.4381C15.675 14.3239 15.7032 14.2028 15.6557 14.0746C15.6082 13.9464 15.5076 13.8624 15.3538 13.8226C14.7269 13.6778 14.1478 13.4178 13.6163 13.0428C13.0849 12.6678 12.6474 12.1784 12.3038 11.5746C11.9769 11.0041 11.7682 10.3926 11.6777 9.74009C11.5874 9.08742 11.6589 8.45409 11.8923 7.84009C11.9526 7.68625 11.9302 7.55542 11.825 7.44759C11.7198 7.33992 11.5916 7.30275 11.4402 7.33609C10.4442 7.59125 9.65933 8.11367 9.0855 8.90334C8.51183 9.69317 8.225 10.5586 8.225 11.4996C8.225 12.6791 8.64517 13.6823 9.4855 14.5091C10.326 15.3361 11.3392 15.7496 12.525 15.7496ZM12 21.4803C9.83717 20.8905 8.0465 19.6174 6.628 17.6611C5.20933 15.7048 4.5 13.5176 4.5 11.0996V5.34584L12 2.53809L19.5 5.34584V11.0996C19.5 13.5176 18.7907 15.7048 17.372 17.6611C15.9535 19.6174 14.1628 20.8905 12 21.4803Z"
                  fill="black"
                />
              </svg>
            ),
            link: userRole === "admin" ? "#events" : "",
          },
        ];

        setFormattedAlarms(alarmData);
      } catch (err) {
        console.error("Unable to fetch alarms data", err);
      }
    };

    fetchData();
  }, []);

  return {
    formattedAlarms,
    loadingAlarm,
  };
};

export default useGetAlarmsData;
