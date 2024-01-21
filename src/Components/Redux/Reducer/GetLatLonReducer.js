//State Global
const LatlonRdc = {
    lsLatlon: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = LatlonRdc, { type,payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetLatLonApi":
            return { lsLatlon: payload }
        //Action Logout
        
        default:
            return state
    }
}
export default rdc;