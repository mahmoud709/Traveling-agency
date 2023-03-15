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
        TouristPalces: "Best Tourist Palces",
        servs: "Services",
        loc1:"sahar castle",
        loc2:"Sultan Qaboos Mosque",
        loc3:"Sohar Old Market",
        loc4:"Sohar Corniche",
        loc5:"Silver Jubilee Park",
        loc6: "Silver Jubilee Park",
        title1: "This Castle Is One Of The Oldest Tourist Places In Sohar, And One Of The Most Important Castles And Forts Due To Its Privileged Location, And The Important Role It Played Over The Past Centuries",
        title2: "One of the most beautiful tourist places in the state of Sohar, is a huge, newly built royal mosque. If you are visiting Sohar,this landmark is one of the most important architectural features that you can see",
        title3:"Sohar Old Market is the most famous tourist attraction in Sohar, and it is an old market with a modern building in the historical style of the country,which is inspired by the architectural forms",
        title4:"It is one of the most beautiful tourist attractions in Sohar, one of the most crowded places, whether with residents or visitors to the city, so you can enjoy the wonderful waterfront with breezes of clean, fresh air",
        title5:"One of the most wonderful tourist attractions in Sohar, and it was established on the occasion of the silver jubilee of the renaissance that the Sultanate is witnessing,which is characterized by a wonderful design",
        title6: "During your search for the best tourist places in Sohar, you will of course find that the Sohar Gardens sit on its throne, as everyone loves wandering among the green spaces",
        serv1:"Resturants",
        serv2:"police stations",
        serv3:"commercial centers",
        serv4:"Hospital",
        serv5:"Hotels",
        serv6:"Supermarkets",
        
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
        TouristPalces: "افضل الاماكن السياحيه",
        servs: "الخدمات",
        loc1:"قلعة صحار",
        loc2:"مسجد السلطان قابوس",
        loc3:"سوق صحار القديم",
        loc4:"كورنيش صحار",
        loc5:"حديقة اليوبيل الفضي",
        loc6: "حدائق صحار",
        title1: "تُعد هذه القلعة واحدة من أعرق الاماكن السياحية في صحار ، ومن أهم القلاع والحصون نظرًا لموقعها المُميّز، والدور المهم الذي لعبته على مدى القرون الماضية",
        title2: "أحد أجمل الاماكن السياحية في ولاية صحار ، هو مسجد ملكي ضخم تم بناءه حديثًا، فإذا كُنت في زيارة إلى صحار، فهذا المعلم من أهم معالم الفن المعماري الذي يُمكن أن تراه",
        title3:"يعد سوق صحار القديم من أشهر المعالم السياحية في صحار ، وهو سوق قديم ذو مبنى حديث على الطراز التاريخي للبلاد ، مستوحى من الأشكال المعمارية",
        title4:"هي واحدة من أجمل مناطق الجذب السياحي في صحار ، وهي من أكثر الأماكن ازدحامًا ، سواء مع السكان أو زوار المدينة ، لذلك يمكنك الاستمتاع بالواجهة البحرية الرائعة مع نسمات الهواء النقي والنظيف.",
        title5:"من أروع المعالم السياحية في صحار ، وقد أقيم بمناسبة اليوبيل الفضي لعصر النهضة الذي تشهده السلطنة والذي يتميز بتصميم رائع",
        title6: "أثناء البحث عن أفضل الأماكن السياحية في صحار ، ستجد بالطبع حدائق صحار جالسة على عرشها ، حيث يحب الجميع التجول في المساحات الخضراء",
        serv1:"المطاعم",
        serv2:"مراكز شرطه",
        serv3:"مراكز تجاريه",
        serv4:"مستشفي",
        serv5:"فنادق",
        serv6:"اماكن تسوق",
    },
}
myLoginItem = document.querySelector(".signinform");
const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change",(event)=>{
    setLanguage(event.target.value);
    if (event.target.value == "ar") {
        myLoginItem.classList.remove('leftdir')
        myLoginItem.classList.add("rightdir");
    }
} );
const setLanguage = (language) =>{
    const element = document.querySelectorAll("[data-translate]");
    element.forEach((element) =>{
        const langkey = element.getAttribute("data-translate");
        element.textContent = lang[language][langkey];
    });
    document.dir = language === "ar" ? "rtl" : "ltr";
};
const signinform = document.getElementById('signinform');
let login=document.getElementById('login');
login.addEventListener('click', () => {
    signinform.classList.toggle('appearform')
})


