import { HANDLE_PRODUCTDETAIL } from "./actionType"

export const baiTapPhoneActions = {
    handleProductDetail: (payload) => {
        return {
            type: HANDLE_PRODUCTDETAIL,
            payload,
        }
    },
}