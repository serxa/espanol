var DICTS = {
    "Lección 1": [
        { es: "Ser", ru: "быть", tag: "v" },
        { es: "yo soy", ru: "я есть" },
        { es: "tú eres", ru: "ты есть" },
        { es: "él es", ru: "он есть" },
        { es: "nosotros somos", ru: "мы есть" },
        { es: "vosotros sois", ru: "вы есть" },
        { es: "ellos son", ru: "они есть" },

        { es: "Tener", ru: "иметь", tag: "v" },
        { es: "yo tengo", ru: "я имею" },
        { es: "tú tienes", ru: "ты имеешь" },
        { es: "él tiene", ru: "он имеет" },
        { es: "nosotros tenemos", ru: "мы имеем" },
        { es: "vosotros teneis", ru: "вы имеете" },
        { es: "ellos tienen", ru: "они имеют" },

        { es: "Vivir", ru: "жить", tag: "v" },
        { es: "yo vivo", ru: "я живу" },
        { es: "tú vives", ru: "ты живешь" },
        { es: "él vive", ru: "он живет" },
        { es: "nosotros vivimos", ru: "мы живем" },
        { es: "vosotros vivís", ru: "вы живёте" },
        { es: "ellos viven", ru: "они живут" },

        { es: "Despertarse", ru: "просыпаться", tag: "v" },
        { es: "yo me despierto", ru: "я просыпаюсь" },
        { es: "tú te despiertas", ru: "ты просыпаешься" },
        { es: "él se despierta", ru: "он просыпается" },
        { es: "nosotros nos despertamos", ru: "мы просыпаемся" },
        { es: "vosotros os despertais", ru: "вы просыпаетесь" },
        { es: "ellos se despiertan", ru: "они просыпаются" },

        { es: "Levantarse", ru: "подниматься", tag: "v" },
        { es: "yo me levanto", ru: "я поднимаюсь" },
        { es: "tú te levantas", ru: "ты поднимаешься" },
        { es: "él se levanta", ru: "он поднимается" },
        { es: "nosotros nos levatamos", ru: "мы поднимаемся" },
        { es: "vosotros os levantais", ru: "вы поднимаетесь" },
        { es: "ellos se levantan", ru: "они поднимаются" },

        { es: "Ducharse", ru: "принимать душ", tag: "v" },
        { es: "yo me ducho", ru: "я принимаю душ (вз.)" },
        { es: "tú te duchas", ru: "ты принимаешь душ (вз.)" },
        { es: "él se ducha", ru: "он принимает душ (вз.)" },
        { es: "nosotros nos duchamos", ru: "мы принимаем душ (вз.)" },
        { es: "vosotros os duchais", ru: "вы принимаете душ (вз.)" },
        { es: "ellos se duchan", ru: "они принимают душ (вз.)" },

        { es: "Tomar", ru: "брать", tag: "v" },
        { es: "yo tomo", ru: "я беру" },
        { es: "tú tomas", ru: "ты берешь" },
        { es: "él toma", ru: "он берет" },
        { es: "nosotros tomamos", ru: "мы берем" },
        { es: "vosotros tomais", ru: "вы берете" },
        { es: "ellos toman", ru: "они берут" },

        { es: "Vestirse", ru: "одеваться", tag: "v" },
        { es: "yo me visto", ru: "я одеваюсь" },
        { es: "tú te vistes", ru: "ты одеваешься" },
        { es: "él se viste", ru: "он одевается" },
        { es: "nosotros nos vestimos", ru: "мы одеваемся" },
        { es: "vosotros os vestís", ru: "вы одеваетесь" },
        { es: "ellos visten", ru: "они одеваются" },

        { es: "Desayunar", ru: "завтракать", tag: "v" },
        { es: "yo desayuno", ru: "я завтракаю" },
        { es: "tú desayunas", ru: "ты завтракаешь" },
        { es: "él desayuna", ru: "он завтракает" },
        { es: "nosotros desayunamos", ru: "мы завтракаем" },
        { es: "vosotros desayunais", ru: "вы завтракаете" },
        { es: "ellos desayunan", ru: "они завтракают" },

        { es: "Ponerse", ru: "надевать", tag: "v" },
        { es: "yo me pongo", ru: "я надеваю" },
        { es: "tú te pones", ru: "ты надеваешь" },
        { es: "él se pone", ru: "он надевает" },
        { es: "nosotros nos ponemos", ru: "мы надеваем" },
        { es: "vosotros os poneis", ru: "вы надеваете" },
        { es: "ellos se ponen", ru: "они надевают" },

        { es: "Poner", ru: "класть", tag: "v" },
        { es: "yo pongo", ru: "я кладу" },
        { es: "tú pones", ru: "ты кладешь" },
        { es: "él pone", ru: "он кладет" },
        { es: "nosotros ponemos", ru: "мы кладем" },
        { es: "vosotros poneis", ru: "вы кладете" },
        { es: "ellos ponen", ru: "они кладут" },

        { es: "Salir", ru: "выходить", tag: "v" },
        { es: "yo salgo", ru: "я выхожу" },
        { es: "tú sales", ru: "ты выходишь" },
        { es: "él sale", ru: "он выходит" },
        { es: "nosotros salimos", ru: "мы выходим" },
        { es: "vosotros salís", ru: "вы выходите" },
        { es: "ellos salen", ru: "они выходят" },

        { es: "Ir", ru: "идти", tag: "v" },
        { es: "yo voy", ru: "я иду" },
        { es: "tú vas", ru: "ты идешь" },
        { es: "él va", ru: "он идет" },
        { es: "nosotros vamos", ru: "мы идем" },
        { es: "vosotros vais", ru: "вы идете" },
        { es: "ellos van", ru: "они идут" },
    ],
    "Lección 2": [
        { es: "Estar", ru: "находиться", tag: "v" },
        { es: "yo estoy", ru: "я быть" },
        { es: "tú estás", ru: "ты быть" },
        { es: "él está", ru: "он быть" },
        { es: "nosotros estamos", ru: "мы быть" },
        { es: "vosotros estais", ru: "вы быть" },
        { es: "ellos están", ru: "они быть" },

        { es: "un casa", ru: "дом", tag: "n" },
        { es: "un trabajo", ru: "работа", tag: "n" },
        { es: "una mujer", ru: "дeвушка", tag: "n" },
        { es: "un esposo", ru: "супруг", tag: "n" },
        { es: "una esposa", ru: "супруга", tag: "n" },
        { es: "un hijo", ru: "сын", tag: "n" },
        { es: "una hija", ru: "дочь", tag: "n" },
        { es: "los hijos", ru: "дети", tag: "n" },
        { es: "las hijas", ru: "дочери", tag: "n" },
        { es: "un té", ru: "чай", tag: "n" },
        { es: "un café", ru: "кофе", tag: "n" },
        { es: "una taza", ru: "чашка", tag: "n" },
        { es: "pero", ru: "но" },
        { es: "nueva", ru: "новый", tag: "a" },
        { es: "pantalones", ru: "штаны", tag: "n" },

        { es: "¿Qué tal?", ru: "Как вы?" },
        { es: "¿Cómo?", ru: "Как?" },

        { es: "Beber", ru: "пить", tag: "v" },
        { es: "yo bebo", ru: "я пью" },
        { es: "tú bebes", ru: "ты пьешь" },
        { es: "él bebe", ru: "он пьет" },
        { es: "nosotros bebemos", ru: "мы пьем" },
        { es: "vosotros bebéis", ru: "вы пьете" },
        { es: "ellos beben", ru: "они пьют" },

        { es: "Llamarse", ru: "зваться", tag: "v" },
        { es: "yo me llamo", ru: "меня зовут" },
        { es: "tú te llamas", ru: "тебя зовут" },
        { es: "él se llama", ru: "его зовут" },
        { es: "nosotros nos llamamos", ru: "нас зовут" },
        { es: "vosotros os llamais", ru: "вас зовут" },
        { es: "ellos se llaman", ru: "их зовут" },

        { es: "Llegar", ru: "прибывать", tag: "v" },
        { es: "yo llego", ru: "я прибывают" },
        { es: "tú llegas", ru: "ты прибываешь" },
        { es: "él llega", ru: "он прибывает" },
        { es: "nosotros llegamos", ru: "мы прибываем" },
        { es: "vosotros llegais", ru: "вы прибываете" },
        { es: "ellos llegan", ru: "они прибывают" },

        { es: "Venir", ru: "приходить", tag: "v" },
        { es: "yo vengo", ru: "я пришел" },
        { es: "tú vienes", ru: "ты пришел" },
        { es: "él viene", ru: "он пришел" },
        { es: "nosotros venimos", ru: "мы пришли" },
        { es: "vosotros venís", ru: "вы пришли" },
        { es: "ellos vienen", ru: "они пришли" },

        { es: "Comer", ru: "кушать, есть, обедать", tag: "v" },
        { es: "Almorzar", ru: "обедать" },
        { es: "el almuerzo", ru: "обед", tag: "n" },
        { es: "una comida", ru: "еда", tag: "n" },

        { es: "Cenar", ru: "ужинать", tag: "v" },
        { es: "yo ceno", ru: "я ужинаю" },
        { es: "tú cenas", ru: "ты ужинаешь" },
        { es: "él cena", ru: "он ужинает" },
        { es: "nosotros cenamos", ru: "мы ужинаем" },
        { es: "vosotros cenais", ru: "вы ужинаете" },
        { es: "ellos cenan", ru: "они ужинают" },

        { es: "una merienda", ru: "закуска", tag: "n" },
        { es: "rojo", ru: "красный", tag: "a" },
        { es: "blanco", ru: "белый", tag: "a" },
        { es: "rosado", ru: "розовый", tag: "a" },
        { es: "negro", ru: "черный", tag: "a" },
        { es: "ir a la cama", ru: "идти спать" },

        { es: "Dormir", ru: "спать", tag: "v" },
        { es: "yo duermo", ru: "я сплю" },
        { es: "tú duermes", ru: "ты спишь" },
        { es: "él duerme", ru: "он спит" },
        { es: "nosotros dormimos", ru: "мы спим" },
        { es: "vosotros dormís", ru: "вы спите" },
        { es: "ellos duermen", ru: "они спят" },

        { es: "Acostarse", ru: "лечь спать", tag: "v" },
        { es: "yo me acuesto", ru: "я ложусь спать" },
        { es: "tú te acuestas", ru: "ты ложишься спать" },
        { es: "él se acuesta", ru: "он ложиться спать" },
        { es: "nosotros nos acostamos", ru: "мы ложимся спать" },
        { es: "vosotros os acostais", ru: "вы ложитесь спать" },
        { es: "ellos se acuestan", ru: "они ложаться спать" },
    ],
    "Lección 3": [
        { es: "el coche", ru: "автомобиль", tag: "n" },
        { es: "el zumo", ru: "сок", tag: "n" },
        { es: "naranja", ru: "апельсин", tag: "n" },
        { es: "melocotón", ru: "персик", tag: "n" },
        { es: "un abrigo", ru: "пальто", tag: "n" },
        { es: "avión", ru: "самолет", tag: "n" },
        { es: "cero", ru: "0" },
        { es: "uno", ru: "1" },
        { es: "dos", ru: "2" },
        { es: "tres", ru: "3" },
        { es: "cuatro", ru: "4" },
        { es: "cinco", ru: "5" },
        { es: "seis", ru: "6" },
        { es: "siete", ru: "7" },
        { es: "ocho", ru: "8" },
        { es: "nueve", ru: "9" },
        { es: "diez", ru: "10" },
        { es: "once", ru: "11" },
        { es: "doce", ru: "12" },
        { es: "catorce", ru: "14" },
        { es: "después", ru: "после" },
        { es: "perro", ru: "собака" },

        { es: "Dar", ru: "давать", tag: "v" },
        { es: "yo doy", ru: "я даю" },
        { es: "tú das", ru: "ты даешь" },
        { es: "él da", ru: "он дает" },
        { es: "nosotros damos", ru: "мы даем" },
        { es: "vosotros dais", ru: "вы даете" },
        { es: "ellos dan", ru: "они дают" },

        { es: "Pasear", ru: "гулять", tag: "v" },
        { es: "un paseo", ru: "прогулка" },
        { es: "Cocinar", ru: "готовить (cook)" },
        { es: "Preparar", ru: "готовить (prepare)" },
        { es: "yo preparo la cena", ru: "я готовлю ужин" },
        { es: "una copa", ru: "стакан" },
        { es: "un vino tinto", ru: "красное вино" },
    ],
    "Lección 4": [
        { es: "¿Qué tiempo hace?", ru: "Как погода?" },
        { es: "hace calor", ru: "жарко" },
        { es: "hace frío", ru: "холодно" },
        { es: "hace fresco", ru: "прохладно" },
        { es: "llover", ru: "идти дождь" },
        { es: "nevar", ru: "идти снег" },
        { es: "grados", ru: "градусов" },
        { es: "bajo cero", ru: "ниже нуля" },
        { es: "sobre cero", ru: "выше нуля" },

        { es: "Hacer", ru: "делать", tag: "v" },
        { es: "yo hago", ru: "я делаю" },
        { es: "tú haces", ru: "ты делаешь" },
        { es: "él hace", ru: "он делает" },
        { es: "nosotros hacemos", ru: "мы делаем" },
        { es: "vosotros haceis", ru: "вы делаете" },
        { es: "ellos hacen", ru: "они делают" },

        { es: "deberes de casa", ru: "домашние задания" },
        { es: "un queso", ru: "сыр", tag: "n" },
        { es: "una maramelada", ru: "варенье", tag: "n" },
        { es: "un bocadilo", ru: "сэндвич", tag: "n" },
        { es: "un grito", ru: "крик", tag: "n" },

        { es: "Acabar", ru: "заканчивать", tag: "v" },
        { es: "yo acabo de", ru: "я только что" },
        { es: "tú acabas de", ru: "ты только что" },
        { es: "él acaba de", ru: "он только что" },
        { es: "nosotros acabamos de", ru: "мы только что" },
        { es: "vosotros acabais de", ru: "вы только что" },
        { es: "ellos acaban de", ru: "они только что" },

        { es: "para", ru: "на" },
        { es: "una plancha", ru: "утюг", tag: "n" },
        { es: "Planchar", ru: "утюжить", tag: "v" },
        { es: "Llevar", ru: "носить", tag: "v" },
        { es: "un vestido", ru: "платье", tag: "n" },
    ],
    "Lección 5": [
        { es: "ola de calor", ru: "жара" },
        { es: "Sacar", ru: "выгуливать", tag: "v" },

        { es: "mi ...", ru: "мой ..." },
        { es: "tu ...", ru: "твой ..." },
        { es: "su ...", ru: "его/их ..." },
        { es: "nuestro ...", ru: "наш ..." },
        { es: "vuestro ...", ru: "ваш ..." },

        { es: "mío/mía", ru: "мой/моя" },
        { es: "tuyo/tuya", ru: "твой/твоя" },
        { es: "suyo/suya", ru: "его/их" },
        { es: "nuestro/nuestra", ru: "наш/наша" },
        { es: "vuestro/vuestra", ru: "ваш/ваша" },

        { es: "este", ru: "этот" },
        { es: "esta", ru: "эта" },
        { es: "aquel", ru: "тот" },
        { es: "aquella", ru: "та" },

        { es: "sobre", ru: "(действие) на" },
        { es: "en", ru: "(место) на" },

        { es: "ir de compras", ru: "идти за покупками" },
        { es: "hacer compras", ru: "делать покупки" },
        { es: "estar cansado/a", ru: "находиться в уставшем состоянии" },
        { es: "estar casado", ru: "быть женатым/замужем" },

        { es: "Quedarse", ru: "оставаться", tag: "v" },
        { es: "yo me quedo", ru: "я остаюсь" },
        { es: "tú te quedas", ru: "ты остаешься" },
        { es: "él se queda", ru: "он остается" },
        { es: "nosotros nos quedamos", ru: "мы остаемся" },
        { es: "vosotros os quedais", ru: "вы остаетесь" },
        { es: "ellos se quedan", ru: "они остаются" },

        { es: "cuando", ru: "когда" },
        { es: "carta", ru: "письмо" },

        { es: "Escribir", ru: "писать", tag: "v" },
        { es: "yo escribo", ru: "я пишу" },
        { es: "tú escribes", ru: "ты пишешь" },
        { es: "él escribe", ru: "он пишет" },
        { es: "nosotros escribimos", ru: "мы пишем" },
        { es: "vosotros escribís", ru: "вы пишете" },
        { es: "ellos escriben", ru: "они пишут" },
    ],
    "Lección 6": [
        { es: "normalmente", ru: "обычно" },
        { es: "un colegio", ru: "школа", tag: "n" },
        { es: "una escuela", ru: "школа чего-то", tag: "n" },
        { es: "... en punto", ru: "... ровно (о времени)" },
        { es: "... y media", ru: "... с половиной" },
        { es: "... y cuarto", ru: "... с четвертью" },
        { es: "veinte", ru: "двадцать" },
        { es: "veinticinco", ru: "двадцатьпять" },
        { es: "¿Qué hora es/tienes?", ru: "Cколько времени?" },
        { es: "¿A qué hora?", ru: "когда/во сколько?" },
        { es: "perdone/disculpe", ru: "прощу прощения" },
        { es: "de la mañana", ru: "утром" },
        { es: "de la tarde", ru: "днем" },
        { es: "de la noche", ru: "вечером" },
        { es: "de la madrugada", ru: "ночью" },
    ],
    "Lección 7": [
        { es: "Trabajar", ru: "работать", tag: "v" },
        { es: "ir+a+infinitivo", ru: "собираюсь+что-то+делать" },
        { es: "un paseo", ru: "прогулка", tag: "n"  },
        { es: "la hora de la comida", ru: "обеденное время" },

        { es: "Volver", ru: "возвращаться", tag: "v" },
        { es: "yo vuelvo", ru: "я возвращаюсь" },
        { es: "tú vuelves", ru: "ты возвращаешься" },
        { es: "él vuelve", ru: "он возвращается" },
        { es: "nosotros volvemos", ru: "мы возвращаемся" },
        { es: "vosotros volveis", ru: "вы возвращаетесь" },
        { es: "ellos vuelven", ru: "они возвращаются" },

        { es: "cada", ru: "каждый" },
        { es: "", ru: "" },

        { es: "Jugar", ru: "играть", tag: "v" },

        { es: "Gustarse", ru: "нравиться", tag: "v" },
        { es: "A mi me gusta+infinitivo", ru: "мне нравиться ..." },
        { es: "A tí te gusta+infinitivo", ru: "тебе нравиться ..." },
        { es: "A él le gusta+infinitivo", ru: "ему нравиться ..." },
        { es: "A nosotros nos gusta+infinitivo", ru: "нам нравиться ..." },
        { es: "A vosotros os gusta+infinitivo", ru: "вам нравиться ..." },
        { es: "A ellos les gusta+infinitivo", ru: "им нравиться ..." },

        { es: "Ver", ru: "смотреть", tag: "v" },
        { es: "yo veo", ru: "я смотрю" },
        { es: "tú ves", ru: "ты смотришь" },
        { es: "él ve", ru: "он смотрит" },
        { es: "nosotros vemos", ru: "мы смотрим" },
        { es: "vosotros veis", ru: "вы смотрите" },
        { es: "ellos ven", ru: "они смотрят" },

        { es: "el televisor", ru: "телевизор", tag: "n" },
        { es: "la televisión", ru: "телевидение", tag: "n" },
        { es: "unos vaqueros", ru: "джинсы", tag: "n" },
    ],
    "Lección 8": [
        { es: "desfile", ru: "парад", tag: "n" },
        { es: "fuegos artificiales", ru: "салют" },
        { es: "un petardo", ru: "петарда", tag: "n" },
        { es: "una tostada", ru: "тост", tag: "n" },
        { es: "con", ru: "с (предлог)" },
        { es: "la ropa", ru: "одежда" },
        { es: "tarde", ru: "позже" },
        { es: "una clase", ru: "класс" },
        { es: "adjectivo", ru: "прилагательное", tag: "n" },
        { es: "un hombre", ru: "мужчина", tag: "n" },
        { es: "un chico", ru: "мальчик", tag: "n" },
        { es: "una chica", ru: "девочка", tag: "n" },
        { es: "sincero", ru: "искренний", tag: "a" },
        { es: "alegre", ru: "веселый", tag: "a" },
        { es: "inteligente", ru: "умный", tag: "a" },
        { es: "educado", ru: "воспитанный", tag: "a" },
        { es: "gente", ru: "люди", tag: "n" },
        { es: "la educación", ru: "образование", tag: "a" },
        { es: "feliz", ru: "счастливый", tag: "a" },
        { es: "difícil", ru: "сложный", tag: "a" },
        { es: "fácil", ru: "легкий", tag: "a" },
        { es: "familiar", ru: "семейный", tag: "a" },
        { es: "pareja", ru: "пара", tag: "n" },
        { es: "alto", ru: "высокий", tag: "a" },
        { es: "bajo", ru: "низкий", tag: "a" },
        { es: "largo", ru: "длинный", tag: "a" },
        { es: "corto", ru: "коротнкий", tag: "a" },
        { es: "gordo", ru: "толстый", tag: "a" },
        { es: "delgado", ru: "худой", tag: "a" },
        { es: "azul", ru: "синий", tag: "a" },
        { es: "amarillo", ru: "желтый", tag: "a" },
        { es: "una pelicula", ru: "фильм", tag: "n" },
        { es: "aburrida", ru: "скучный", tag: "a" },
        { es: "Aburrirse", ru: "заскучать", tag: "v" },
        { es: "un traje", ru: "костюм", tag: "n" },
        { es: "estar constipado", ru: "схватить насморк" },
        { es: "estar resfriado", ru: "простудиться" },
        { es: "estar enfermo", ru: "заболеть" },
        { es: "una mesa", ru: "стол", tag: "n" },
        { es: "cama", ru: "кровать", tag: "n" },
        { es: "un traje", ru: "костюм", tag: "n" },
        { es: "un plato", ru: "тарелка", tag: "n" },
        { es: "una plata", ru: "серебро", tag: "n" },
        { es: "un cuchillo", ru: "нож", tag: "n" },
        { es: "una cuchara", ru: "ложка", tag: "n" },
        { es: "un tenedor", ru: "вилка", tag: "n" },
    ],
};

/*
        { es: "", ru: "" },
        { es: "", ru: "", tag: "n" },
        { es: "", ru: "", tag: "a" },

        { es: "", ru: "", tag: "v" },
        { es: "yo ", ru: "я " },
        { es: "tú ", ru: "ты " },
        { es: "él ", ru: "он " },
        { es: "nosotros ", ru: "мы " },
        { es: "vosotros ", ru: "вы " },
        { es: "ellos ", ru: "они " },

        { es: "yo me ", ru: "я " },
        { es: "tú te ", ru: "ты " },
        { es: "él se ", ru: "он " },
        { es: "nosotros nos ", ru: "мы " },
        { es: "vosotros os ", ru: "вы " },
        { es: "ellos se ", ru: "они " },
*/