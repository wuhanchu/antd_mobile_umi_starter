let { REACT_APP_ENV, BASE_PATH } = process.env

if (!BASE_PATH) {
    BASE_PATH = ""
}

export default {
    // basic info
    title: "知料移动端", // 基础信息
    product_key: "z_know_info",

    //desc: "antd_pro_design 演示系统", // 基础信息
    copyright: "上海掌数科技", // 版本信息

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
