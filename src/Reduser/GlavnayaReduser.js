const Glavnaya_Menu = " Glavnaya_Menu"
let map = [
    { url: "/glavnaya", id: 1, name: "Кухни" },
    { url: "/", id: 3, name: "Мебель для ванной" },
    { url: "/", id: 4, name: "Прихожие" },
    { url: "/", id: 5, name: "Детская мебель" },
    { url: "/", id: 6, name: "Гардеробные / стеллажные" },
    { url: "/", id: 7, name: "Мебель для гостиной" },
    { url: "/", id: 8, name: "Полки / Ниши" },
    { url: "/", id: 9, name: "Кабинеты и Библиотеки" },
    { url: "/", id: 10, name: "Межкомнатные перегородки" },
    { url: "/", id: 11, name: "Мебель для спальной" },
    { url: "/", id: 12, name: "Мебель из массива" },
    { url: "/", id: 13, name: "Офисная мебель" },
    { url: "/", id: 14, name: "Мебель с мягкими декорами" },
    { url: "/", id: 15, name: "Мебель Лофт" }
]
const GlavnayaReduser = (state = map, action) => {
    switch (action.type) {
        case Glavnaya_Menu:
            return { ...state }
        default: return state;
    }
};
export default GlavnayaReduser;