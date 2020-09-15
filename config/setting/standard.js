let { REACT_APP_ENV, BASE_PATH } = process.env

if (!BASE_PATH) {
    BASE_PATH = ""
}

export default {
    // basic info
    title: "antd_mobile_umi_dva_starter", // 基础信息
    product_key: "antd_mobile_umi_dva_starter",

    //desc: "antd_pro_design 演示系统", // 基础信息
    copyright: "antd_mobile_umi_dva_starter", // 版本信息

    // api 前缀
    apiVersion: BASE_PATH + "/api/",
    DATE_FORMAT: "YYYY-MM-DD",
    DATE_TIME_FORMAT: "YYYY-MM-DD HH:mm:ss",
    theme: {
        primaryColor: "#1890ff",
        brandPrimaryTap: "#1890ff"
    },
    // oauth config
    oauth: {},

    // iconfont
    iconfontUrl: null,
    BASE_PATH
}
