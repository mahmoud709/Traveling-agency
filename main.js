const lang = {
    en: {
        Wejhatee:"Wejhatee",
        Home:"Home",
        TouristPalces:"TouristPalces",
        Services:"Services",
        Reviews:"Reviews",
        login:"login",
        register:"register",
        Travel:"Travel is to live more than once",
        SignUp: "Sign up",
        Email: "Email",
        password: "password",
        Username: "Username",
        Enterusername: "Enter username",
        Enteremail: "Enter email",
        Enterpassword: "Enter password",
        
    },
    ar: {
        Wejhatee:"وجهتي",
        Home:"الرئيسيه",
        TouristPalces:"الاماكن السياحيه",
        Services:"الخدمات",
        Reviews:"الاراء",
        login:"تسجيل الدخول ",
        register:"انشاء حساب",
        Travel:"السفر هو العيش اكثر من مره",
        SignUp: "تسجيل دخول",
        Email: "البريد الاكتروني",
        password:"الرقم السري",
        Username: "اسم المستخدم",
        Enterusername: "اسم المستخدم",
        Enteremail:"البريد الاكتروني",
        Enterpassword: "الرقم السري ",
    },
}
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change",(event)=>{
    setLanguage(event.target.value);
} );
const setLanguage = (language) =>{
    const element = document.querySelectorAll("[data-translate]");
    element.forEach((element) =>{
        const langkey = element.getAttribute("data-translate");
        element.textContent = lang[language][langkey];
    });
    document.dir = language ==="ar" ?   "rtl" : "ltr";
};

const signinform = document.getElementById('signinform');
let login=document.getElementById('login');
login.addEventListener('click', () => {
    signinform.classList.toggle('appearform')
})


