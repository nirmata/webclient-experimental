const nirmataColors = {
  primaryBlue: '#1677FF',
  defaultColor: '#000000E0',

  primaryGrey: '#ccc',
  secondaryGrey: '#333',

  //   GREY
  grey100: '#f5f5f5',
  grey60: '#00000073',
  grey50: '#d9d9d9',
  grey40: '#f0f0f0',
  grey30: '#bfbfbf',

  //  BLUE
  blue100: '#91CAFF',
  blue300: '#1677FF',
  darkBlue: '#29417A',

  colorErrorActive: '#D9363E',
  colorErrorActiveBg: '#FFCCC74D',
  colorErrorActiveBorder: '#FFA39E',

  colorSuccess: '#52C41A',
  colorSuccessBg: '#F6FFED',
  colorSuccessBorder: '#B7EB8F',

  colorWarning: '#FAAD14',
  colorWarningBg: '#FFFBE6',
  colorWarningBorder: '#FFE58F',

  colorError: '#FF4D4F',
  colorErrorBg: '#FFF2F0',
  colorErrorBorder: '#FFCCC7',

  colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
  tagDefault: '#00000005',
  colorOrange: '#FA8C16',

  white: '#fff',
  black: '#000',
};

const config = {
  token: {
    fontFamily: 'lato',
    fontSizeIcon: 14,

    //basic
    colorPrimary: nirmataColors.blue300,
    secondaryColor: nirmataColors.darkBlue,
    basicTextColor: nirmataColors.black,
    basicFontWeight: 400,
    inputBorderRadius: '0.375rem',
    colorErrorActive: nirmataColors.colorErrorActive,
    colorSuccess: nirmataColors.colorSuccess,
    colorWarning: nirmataColors.colorWarning,
    colorError: nirmataColors.colorError,
    colorSkipped: nirmataColors.colorTextTertiary,
    colorBlue: nirmataColors.blue100,
    colorOrange: nirmataColors.colorOrange,

    tabs: {
      color: nirmataColors.black,
      activeColor: nirmataColors.blue300,
    },
  },
  components: {
    Radio: {
      buttonBg: nirmataColors.grey100,
      buttonColor: nirmataColors.secondaryGrey,
      buttonCheckedBg: nirmataColors.darkBlue,
      buttonPaddingInline: 24,
    },
    Breadcrumb: {
      fontSize: 14,
      iconFontSize: 14,

      itemColor: nirmataColors.darkBlue,
      lastItemColor: nirmataColors.darkBlue,

      linkColor: nirmataColors.darkBlue,
      linkHoverColor: nirmataColors.darkBlue,

      separatorColor: nirmataColors.primaryGrey,
      separatorMargin: 5,
    },
    BreadcrumbBadge: {
      color: nirmataColors.black,
      background: nirmataColors.grey50,
      borderColor: nirmataColors.grey40,
    },
  },
};

export { nirmataColors, config };
