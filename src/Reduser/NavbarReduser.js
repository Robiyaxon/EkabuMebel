const Navbar = `Navbar`
let map = [
    { id: 1, url: "/glavnaya", name: "КАТАЛОГ МЕБЕЛИ" },
    { id: 2, url: "/mАТЕРИАЛЫ", name: "МАТЕРИАЛЫ" },
    { id: 3, url: "/gАРАНТИЯ", name: "ГАРАНТИЯ" },
    { id: 4, url: "/pОЛЕЗНО", name: "ПОЛЕЗНО" },
    { id: 5, url: "/portfolio", name: "ПОРТФОЛИО" },
    { id: 6, url: "/Pосмотреть", name: "ДИЗАЙНЕР" },
    { id: 7, url: "/kontact", name: "КОНТАКТЫ" }]
const Navbar_Reduser = (state = map, action) => {
    switch (action.type) {
        case Navbar:
            return { ...state };
        default: return state;
    }
};
export default Navbar_Reduser;