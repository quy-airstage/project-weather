//State Global
const NameCtRdc = {
    NameCt: null
}
//Mặc định trả về phương thức quản lý State
const rdc = (state = NameCtRdc, { type,payload }) => {
    //Switch theo Action truyền vào
    switch (type) {
        //Action Login
        case "GetNamecity":
            return { NameCt: payload }
        //Action Logout
        
        default:
            return state
    }
}
export default rdc;