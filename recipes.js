const recipes = [
  {
    category: "Platos Principales",
    title: "Paella Valenciana",
    tags: ["#España", "#PlatoPrincipal", "#Arroz"],
    ingredients: [
      "400 g de arroz bomba",
      "800 g de pollo troceado",
      "400 g de conejo troceado",
      "200 g de judía verde plana (bajoqueta)",
      "150 g de garrofón",
      "1 tomate maduro rallado",
      "Aceite de oliva virgen extra",
      "Pimentón dulce",
      "Hebras de azafrán",
      "Sal",
      "Agua (aprox. 2 litros)",
      "Una ramita de romero (opcional)"
    ],
    instructions: [
      "Calienta un buen chorro de aceite en la paella. Sofríe el pollo y el conejo hasta que estén bien dorados.",
      "Añade la judía verde y el garrofón y sofríe unos minutos más.",
      "Haz un hueco en el centro, añade el tomate rallado y sofríelo. Agrega pimentón y vierte el agua.",
      "Añade azafrán y sal. Cuece el caldo 30-40 minutos.",
      "Sube el fuego, añade el arroz y repártelo.",
      "Cocina a fuego fuerte 10 min, y luego a fuego medio-bajo otros 8-10 min.",
      "Sube el fuego el último minuto para el \"socarrat\".",
      "Retira, cubre y deja reposar 5 minutos."
    ]
  },
  {
    category: "Platos Principales",
    title: "Schiacciata",
    tags: ["#Italia", "#Vegano", "#Vegetariano", "#Pan", "#Aperitivo"],
    ingredients: [
      "400 g de patatas medianas",
      "200 g de harina",
      "10 g de impulsor o levadura tipo Royal",
      "Unos 300 ml de agua",
      "Un par de ramitas de romero fresco",
      "Aceite de oliva virgen extra",
      "1 cucharadita de sal",
      "Parmesano rallado al gusto (opcional)"
    ],
    instructions: [
      "Calentar el horno a 200 grados con ventilador (si el horno tiene). Cubrir una bandeja con papel de horno.",
      "Batir en un bol el agua a temperatura ambiente con la sal y tres cucharadas de aceite con un batidor de varillas. La sal debe disolverse del todo, y la mezcla, emulsionar ligeramente.",
      "Añadir la harina tamizada pasada por un colador poco a poco, y seguimos mezclando hasta que quede una pasta cremosa.",
      "Lavar bien las patatas y cortarlas en láminas finas con una mandolina o un cuchillo. Añadirlas a la masa y mezclar.",
      "Verter la mezcla en la bandeja y repartir bien. Repartir hojas de romero por encima y el parmesano, si se usa.",
      "Hornear entre 45 y 50 minutos o hasta que esté bien dorado.",
      "Consejo: Cuando lleve media hora, conviene girar la bandeja para que se dore de manera uniforme.",
      "Sacar del horno, pintar con aceite de oliva y servir inmediatamente.",
      "Consejo: La schiacciata se puede rematar con unas escamas de sal, y tomarla con embutido, burrata, verduras a la plancha, ensalada o como simple aperitivo."
    ]
  },
  {
    category: "Platos Principales",
    title: "Pisto Manchego",
    tags: ["#España", "#Vegano", "#Vegetariano", "#PrimerPlato", "#Guarnición"],
    ingredients: [
      "2 pimientos verdes",
      "1 pimiento rojo",
      "2 calabacines",
      "1 berenjena (opcional)",
      "2 cebollas",
      "800 g de tomate triturado",
      "Aceite de oliva",
      "Sal y pizca de azúcar"
    ],
    instructions: [
      "Pica todas las verduras en dados.",
      "Pocha la cebolla en aceite.",
      "Añade los pimientos y cocina 15 min.",
      "Agrega el calabacín (y berenjena) y cocina 15 min.",
      "Vierte el tomate, sal y azúcar.",
      "Cocina a fuego lento 45-60 minutos."
    ]
  },
  {
    category: "Platos Principales",
    title: "Arroz Frito con Pollo, Verduras y Salsas Negras",
    tags: ["#Asia", "#PlatoPrincipal", "#Arroz", "#Pollo"],
    ingredients: [
      "2 tazas de arroz cocido (del día anterior)",
      "1 pechuga de pollo en trozos",
      "1 zanahoria en cubos",
      "1 pimiento rojo en cubos",
      "1 taza de setas laminadas",
      "2 huevos batidos",
      "2 dientes de ajo picados",
      "1 cebollino picado",
      "2 cdas. salsa soja oscura",
      "1 cda. salsa soja light",
      "1 cdta. vinagre Chinkiang (opc.)",
      "1 cda. vino Shaoxing (opc.)",
      "1 cdta. azúcar (opc.)",
      "½ cdta. pimienta blanca",
      "Aceite"
    ],
    instructions: [
      "Marinar pollo: Mezcla pollo, 1 cdta. soja light, ½ cdta. vino Shaoxing y pimienta. Reposar 10 min.",
      "Calienta un wok, revuelve los huevos, retira y reserva.",
      "Saltea el ajo. Añade el pollo y cocina hasta dorar. Retira y reserva.",
      "Saltea las verduras 2-3 min.",
      "Integrar: Agrega el arroz y mezcla a fuego alto.",
      "Vierte las salsas, el vinagre y el vino.",
      "Añade el pollo y el huevo. Mezcla todo.",
      "Espolvorea cebollino y sirve."
    ]
  },
  {
    category: "Platos Principales",
    title: "Tom Kha Kai (Sopa Tailandesa de Coco y Pollo)",
    tags: ["#Tailandia", "#Sopa", "#PlatoPrincipal", "#Pollo", "#SinGluten"],
    ingredients: [
      "Con concentrado: 1 sobre de concentrado Tom Kha",
      "Con concentrado: 300 g de pollo",
      "Con concentrado: 480 ml leche de coco",
      "Con concentrado: 480 ml agua",
      "Con concentrado: 100 g champiñones",
      "Concentrado: Salsa de pescado y zumo de lima",
      "Desde cero: 500 g de pollo",
      "Desde cero: 800 ml leche de coco",
      "Desde cero: 480 ml caldo de pollo",
      "Desde cero: 5 cm de galanga",
      "Desde cero: 2 tallos de lemongrass",
      "Desde cero: 5-6 hojas de lima kaffir",
      "Desde cero: 200 g champiñones",
      "Desde cero: 2-3 chiles rojos (opc.)",
      "Desde cero: 2-3 cdas. salsa de pescado",
      "Desde cero: 1-2 cdas. zumo de lima",
      "Desde cero: 1 cdta. azúcar de palma",
      "Desde cero: Cilantro"
    ],
    instructions: [
      "Con concentrado: Hierve 240ml de leche de coco. Añade pollo y concentrado. Cocina.",
      "Con concentrado: Añade agua y cocina a fuego lento.",
      "Con concentrado: Incorpora el resto de leche de coco y champiñones. Hierve.",
      "Con concentrado: Sazona con salsa de pescado y lima.",
      "Desde cero: Calienta 240ml de leche de coco. Añade galanga, lemongrass y hojas de lima kaffir. Cocina 1-2 min.",
      "Desde cero: Añade el pollo y cocina.",
      "Desde cero: Vierte el resto de leche y caldo. Hierve.",
      "Desde cero: Reduce el fuego y cocina 10-15 min.",
      "Desde cero: Añade champiñones y chiles. Cocina 5 min.",
      "Desde cero: Retira del fuego. Sazona con salsa de pescado, lima y azúcar.",
      "Desde cero: Sirve con cilantro."
    ]
  },
  {
    category: "Platos Principales",
    title: "Empanada de Atún",
    tags: ["#España", "#Pescado", "#PlatoPrincipal", "#Aperitivo"],
    ingredients: [
      "2 láminas de masa de empanada",
      "2 cebollas picadas",
      "1 pimiento rojo picado",
      "2 dientes de ajo picados",
      "400 g tomate triturado",
      "3 latas de atún escurrido",
      "2 huevos duros picados",
      "Aceite de oliva, sal",
      "1 huevo batido"
    ],
    instructions: [
      "Sofríe cebolla y pimiento. Añade ajo.",
      "Vierte el tomate y cocina hasta espesar. Sazona.",
      "Enfría y mezcla con atún y huevos duros.",
      "Precalienta horno a 200°C. Extiende una masa.",
      "Reparte el relleno.",
      "Cubre con la otra masa y sella los bordes. Haz una chimenea.",
      "Pinta con huevo batido.",
      "Hornea 25-30 minutos."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Croquetas de Jamón",
    tags: ["#España", "#Tapa", "#Carne", "#Fritura"],
    ingredients: [
      "100 g de jamón serrano picado",
      "1 litro de leche entera",
      "100 g de mantequilla",
      "100 g de harina",
      "1 cebolla pequeña picada",
      "Nuez moscada, sal, pimienta",
      "Huevo y pan rallado",
      "Aceite para freír"
    ],
    instructions: [
      "Pocha la cebolla en mantequilla.",
      "Añade el jamón y sofríe 1 min.",
      "Incorpora la harina y tuéstala (roux).",
      "Vierte la leche caliente poco a poco, batiendo.",
      "Cocina la bechamel 20-25 min. Sazona.",
      "Vierte en una fuente, cubre con film y enfría en nevera 8h.",
      "Forma las croquetas, pasa por huevo y pan rallado.",
      "Fríe en aceite caliente."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Ensaladilla Rusa",
    tags: ["#España", "#Tapa", "#PrimerPlato", "#Pescado"],
    ingredients: [
      "4 patatas medianas",
      "2 zanahorias",
      "2 huevos",
      "1 lata de atún",
      "150 g de guisantes cocidos",
      "Aceitunas rellenas",
      "Mayonesa",
      "Sal"
    ],
    instructions: [
      "Cuece patatas y zanahorias. Cuece los huevos.",
      "Pela y pica patatas, zanahorias y 1 huevo.",
      "Mezcla en un bol las verduras, huevo, guisantes, atún y aceitunas.",
      "Añade mayonesa y mezcla.",
      "Decora con el otro huevo y enfría."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Tortilla de Patatas",
    tags: ["#España", "#Tapa", "#PrimerPlato", "#Vegetariano", "#Huevo"],
    ingredients: [
      "1 kg de patatas",
      "6-8 huevos",
      "1 cebolla grande (opcional)",
      "Aceite de oliva",
      "Sal"
    ],
    instructions: [
      "Corta las patatas en láminas finas (y la cebolla en juliana).",
      "Fríe/confita las patatas en abundante aceite a fuego medio-bajo.",
      "Escurre bien las patatas.",
      "Bate los huevos con sal.",
      "Mezcla patatas y huevos. Reposar 10 min.",
      "Calienta una sartén, vierte la mezcla y cuaja.",
      "Dale la vuelta y cocina al gusto."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Hummus",
    tags: ["#OrienteMedio", "#Tapa", "#Vegano", "#Vegetariano", "#Untable", "#Legumbres"],
    ingredients: [
      "400 g de garbanzos cocidos",
      "2 cdas. tahini",
      "Zumo de 1 limón",
      "1 diente de ajo",
      "Sal, comino",
      "Aceite de oliva",
      "Pimentón"
    ],
    instructions: [
      "Escurre los garbanzos (reserva líquido).",
      "Tritura garbanzos, tahini, zumo de limón, ajo, sal y comino.",
      "Añade líquido reservado hasta obtener la textura deseada.",
      "Sirve con aceite de oliva y pimentón."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Paté de Almendras y Champiñones",
    tags: ["#Fusión", "#Tapa", "#Vegano", "#Vegetariano", "#Untable"],
    ingredients: [
      "150 g almendras crudas (remojadas 4h)",
      "250 g champiñones",
      "1 chalota",
      "1 diente de ajo",
      "Chorrito de vino blanco",
      "Tomillo, sal, pimienta",
      "Aceite de oliva"
    ],
    instructions: [
      "Escurre las almendras.",
      "Pica y sofríe chalota y ajo. Añade champiñones y cocina.",
      "Añade tomillo y vino. Salpimienta.",
      "Tritura las almendras con el sofrito hasta obtener una pasta.",
      "Pasa a un tarro y enfría."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Sobrasada Vegana de Tomate Seco",
    tags: ["#España", "#Tapa", "#Vegano", "#Vegetariano", "#Untable"],
    ingredients: [
      "150 g tomates secos",
      "75 g almendras tostadas",
      "125 ml aceite de oliva",
      "1 puñado de perejil",
      "1 diente de ajo",
      "2 cdas. pimentón de la Vera",
      "1 cda. pimentón picante (opc.)",
      "1 cdta. sal"
    ],
    instructions: [
      "Rehidrata los tomates si es necesario.",
      "Pon todos los ingredientes en un procesador.",
      "Tritura sin que llegue a ser un puré."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Pimientos Asados",
    tags: ["#España", "#Tapa", "#Guarnición", "#Vegano", "#Vegetariano"],
    ingredients: [
      "4 pimientos rojos grandes",
      "2 dientes de ajo",
      "Aceite de oliva",
      "Vinagre de Jerez",
      "Sal"
    ],
    instructions: [
      "Hornea los pimientos a 200°C durante 45-60 min.",
      "Sácalos y cúbrelos para que 'suden'.",
      "Pélalos, quita las semillas y córtalos en tiras.",
      "Aliña con ajo laminado, sal, aceite y vinagre."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Garbanzos Salteados con Espinacas",
    tags: ["#España", "#Tapa", "#PrimerPlato", "#Vegano", "#Vegetariano", "#Legumbres"],
    ingredients: [
      "400 g garbanzos cocidos",
      "200 g espinacas frescas",
      "2 dientes de ajo laminados",
      "1 cdta. pimentón",
      "Aceite de oliva, sal, pimienta"
    ],
    instructions: [
      "Dora los ajos en aceite.",
      "Añade las espinacas y saltea.",
      "Incorpora los garbanzos y saltea.",
      "Retira del fuego, añade pimentón, sal y pimienta."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Untable de Zanahoria Asada",
    tags: ["#Fusión", "#Tapa", "#Vegano", "#Vegetariano", "#Untable"],
    ingredients: [
      "300 g zanahoria",
      "½ cdta. canela",
      "½ cdta. comino",
      "½ cdta. pimentón",
      "1 limón",
      "1 puñado de nueces",
      "1 diente de ajo",
      "1 puñado de perejil",
      "1-2 cdas. tomate concentrado",
      "Aceite de oliva, sal"
    ],
    instructions: [
      "Corta las zanahorias y hornéalas a 180-200°C durante 1 hora con aceite, sal, comino y pimentón. Deja enfriar.",
      "Tritura las zanahorias con nueces, ajo, perejil, tomate y sal.",
      "Añade zumo de limón, especias y aceite. Tritura.",
      "Ajusta la textura con agua si es necesario."
    ]
  },
  {
    category: "Tapas y Entrantes",
    title: "Mutabal (Crema de Berenjenas)",
    tags: ["#OrienteMedio", "#Tapa", "#Vegetariano", "#Untable"],
    ingredients: [
      "2-3 berenjenas",
      "3 cdas. tahini",
      "4 cdas. yogur de soja (o natural)",
      "Zumo de medio limón",
      "¼ cdta. comino",
      "½ diente de ajo",
      "Sal, pimienta",
      "Para decorar: Aceite, sésamo, granada"
    ],
    instructions: [
      "Corta y haz cortes en las berenjenas. Hornea a 200°C durante 45 min.",
      "Saca la carne y aplástala.",
      "Añade tahini, yogur, limón, comino, ajo, sal y pimienta. Mezcla.",
      "Sirve con los toppings."
    ]
  },
  {
    category: "Postres",
    title: "Tarta de Finlandia (Pannukakku)",
    tags: ["#Finlandia", "#Postre", "#Vegetariano", "#Horno"],
    ingredients: [
      "1 litro de leche",
      "4 huevos",
      "400 g harina",
      "100 g azúcar",
      "1 cdta. sal",
      "1 cdta. vainilla",
      "50 g mantequilla derretida",
      "Mermelada y azúcar glas"
    ],
    instructions: [
      "Precalienta horno a 200°C.",
      "Bate huevos y azúcar.",
      "Añade leche, sal, vainilla y mantequilla.",
      "Incorpora la harina tamizada.",
      "Vierte la masa en una bandeja honda y engrasada.",
      "Hornea 30-40 minutos.",
      "Sirve con mermelada y azúcar glas."
    ]
  },
  {
    category: "Postres",
    title: "Tarta Fácil de Yogur",
    tags: ["#España", "#Postre", "#Vegetariano", "#Horno", "#SinGluten"],
    ingredients: [
      "500 g yogur",
      "5 huevos M",
      "50 g Maicena",
      "Opcional: 200 g azúcar"
    ],
    instructions: [
      "Precalienta horno a 200°C.",
      "Bate los huevos (con azúcar si usas).",
      "Añade yogur y Maicena. Mezcla bien.",
      "Vierte en un molde engrasado.",
      "Hornea: 12 min a 200°C, 35 min a 180°C, 5 min a 170°C.",
      "Deja enfriar en el horno apagado."
    ]
  },
  {
    category: "Postres",
    title: "Crepes",
    tags: ["#Francia", "#Postre", "#Vegetariano"],
    ingredients: [
      "250 g harina",
      "2 huevos",
      "500 ml leche",
      "50 g azúcar",
      "Pizca de sal",
      "50 g mantequilla derretida"
    ],
    instructions: [
      "Mezcla harina, azúcar y sal.",
      "Añade los huevos en el centro y bate.",
      "Añade la leche poco a poco.",
      "Incorpora la mantequilla. Reposar 30 min.",
      "Calienta una sartén y vierte un cucharón de masa.",
      "Cocina 1 minuto por cada lado."
    ]
  },
  {
    category: "Postres",
    title: "Tarta de Teo de Limón",
    tags: ["#Fusión", "#Postre", "#Vegetariano", "#SinHorno"],
    ingredients: [
      "800 g nata para montar",
      "600 g leche condensada",
      "Zumo y ralladura de 6 limas",
      "400 g de galletas"
    ],
    instructions: [
      "Bate nata, leche condensada, zumo y ralladura.",
      "En un molde, forma una capa de galletas.",
      "Cubre con una capa de crema.",
      "Repite el proceso, acabando con crema.",
      "Refrigera un mínimo de 6 horas.",
      "Decora con migas de galleta y ralladura."
    ]
  },
  {
    category: "Desayunos",
    title: "Chía con Leche y Canela",
    tags: ["#Internacional", "#Desayuno", "#Postre", "#Vegano", "#Vegetariano", "#SinGluten", "#SinHorno"],
    ingredients: [
      "3 cdas. semillas de chía",
      "250 ml leche (o bebida vegetal)",
      "1 cdta. canela",
      "Endulzante al gusto",
      "Fruta fresca"
    ],
    instructions: [
      "Mezcla chía, leche, canela y endulzante.",
      "Remueve bien.",
      "Tapa y refrigera un mínimo de 4 horas.",
      "Sirve frío con fruta."
    ]
  }
];

export default recipes;
