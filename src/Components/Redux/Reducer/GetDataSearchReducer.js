//State Global
const SearRdc = {
    lsSear: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = SearRdc, { type,payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetDataApi":
            return { lsSear: payload }
        //Action Logout
        
        default:
            return state
    }
}
export default rdc;