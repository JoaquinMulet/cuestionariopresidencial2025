document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DEL CUESTIONARIO ---
    // Todas las preguntas y explicaciones extraídas del informe.
    const questions = [
        // Bloque A: Seguridad y Orden
        {
            category: "Seguridad y Orden",
            question: "¿Deberían los militares participar en tareas de seguridad dentro del país?",
            options: {
                A: { text: "Sí, deberían patrullar las ciudades y zonas de conflicto (como la Macrozona Sur) para combatir la delincuencia y el terrorismo.", detail: "Esta postura considera que la crisis de seguridad es extrema, una verdadera 'guerra' contra el crimen organizado. Sostiene que solo el poder de fuego y la capacidad disuasiva de las FF.AA. pueden restaurar el orden y que deben usarse 'sin titubeos'." },
                B: { text: "Solo deberían usarse en roles específicos, como proteger infraestructura crítica (ej. torres de alta tensión) o controlar las fronteras.", detail: "Esta es una postura intermedia. Sostiene que los militares no deben actuar como policías en el día a día, pero pueden colaborar en tareas específicas para liberar a los policías. Esto incluye proteger infraestructura crítica (luz, agua) o 'blindar' las fronteras." },
                C: { text: "No, deben limitarse solo a la defensa nacional contra otros países y no involucrarse en el orden público interno.", detail: "Esta postura defiende la separación estricta entre defensa y seguridad pública. Argumenta que los militares no están entrenados para tratar con civiles y su uso interno es un riesgo para los derechos humanos. Algunos, desde esta vereda, proponen 'refundar' las actuales FF.AA. por considerarlas 'fascistas' e 'incapaces'." }
            }
        },
        {
            category: "Seguridad y Orden",
            question: "¿Cuál debiera ser la política principal frente a la inmigración irregular (personas que ingresan por pasos no habilitados)?",
            options: {
                A: { text: "Cierre de fronteras. Se debe detener y expulsar a la mayor brevedad a toda persona que ingrese irregularmente.", detail: "Esta postura prioriza la soberanía y el control territorial absoluto. Ve la inmigración irregular como una amenaza directa a la seguridad. Propone medidas drásticas de disuasión, como 'minas virtuales' , 'minar' la frontera , 'cercar la frontera' o confinar a quienes ingresen en campamentos para su expulsión." },
                B: { text: "Empadronamiento y control. Se debe registrar (con datos biométricos) a todos los que ya están, y expulsar a quienes no se registren o cometan delitos.", detail: "Esta postura es una mezcla de control y pragmatismo. Busca saber 'quién es quién' mediante un registro biométrico obligatorio. El objetivo es tener los datos para poder perseguir a quienes cometen delitos y expulsar a quienes no se registren o tengan antecedentes." },
                C: { text: "Regularización y gestión. Se debe crear un sistema ordenado para planificar la migración laboral y regularizar a quienes ya están en el país, persiguiendo solo a quienes cometen delitos.", detail: "Esta postura ve la migración como un fenómeno que debe ser gestionado, no solo combatido. Propone crear un 'sistema de ordenamiento laboral migratorio' para planificar los flujos según las necesidades del país y regularizar a quienes tienen trabajo, enfocando la persecución solo en el crimen organizado." }
            }
        },
        {
            category: "Seguridad y Orden",
            question: "¿Cuál es la mejor forma de gestionar las cárceles y a los delincuentes de alta peligrosidad?",
            options: {
                A: { text: "Implementar un régimen de 'mano dura' extremo, con aislamiento total para líderes de bandas y en recintos de máxima seguridad (ej. cárceles en altamar o en zonas aisladas).", detail: "Esta postura busca romper el control de las bandas mediante el aislamiento total e inmediato de los líderes criminales. Propone construir 'nuevas y modernas cárceles de alta seguridad' o soluciones no tradicionales como 'Barcos Cárceles' (unidades penitenciarias flotantes) para asegurar el aislamiento." },
                B: { text: "Construir más cárceles de alta seguridad, pero manteniendo los estándares de derechos humanos y programas de reinserción.", detail: "Esta postura también ve la necesidad urgente de más cárceles. Sin embargo, lo enmarca dentro del sistema actual, mejorando la infraestructura de Gendarmería y manteniendo los programas de reinserción y el respeto a los derechos humanos, sin proponer regímenes de excepción." },
                C: { text: "Enfocarse en la reinserción social y la segregación solo como último recurso, evitando las políticas de 'mano dura' que no han funcionado.", detail: "Esta postura considera que las políticas de 'mano dura' fracasan y solo reproducen el crimen. Aboga por un enfoque basado en la justicia social y la rehabilitación como eje central, en lugar de la segregación punitiva." }
            }
        },
        {
            category: "Seguridad y Orden",
            question: "¿Cómo se debe enfrentar la violencia en la Macrozona Sur (Región de La Araucanía y Biobío)?",
            options: {
                A: { text: "Declarando que es terrorismo y usando todas las herramientas del Estado, incluyendo a las FF.AA., para lograr una derrota militar de los grupos armados.", detail: "Esta postura define la violencia explícitamente como 'terrorismo'. Promueve una respuesta militar directa para 'derrotar sin titubeos al crimen organizado... y al terrorismo', usando las FF.AA. de forma permanente." },
                B: { text: "Combinando el uso de la fuerza policial y militar (en estados de excepción) con un plan de desarrollo económico y diálogo con las comunidades.", detail: "Esta es una postura mixta. Reconoce la necesidad de usar la fuerza y los estados de excepción para desarticular a los grupos violentos, pero entiende que la solución final no es solo militar, sino que también requiere desarrollo económico, social y diálogo con las comunidades." },
                C: { text: "Retirando a las fuerzas militares y enfocándose en un diálogo político, reconociendo las demandas territoriales de los pueblos originarios.", detail: "Esta postura ve el conflicto como una lucha política y de 'liberación' del pueblo mapuche. Rechaza la presencia militar y promueve el diálogo político, la 'restitución de tierras' y el reconocimiento de la autodeterminación como única solución." }
            }
        },
        {
            category: "Seguridad y Orden",
            question: "¿Quién debería fiscalizar el porte y uso de armas en la población civil?",
            options: {
                A: { text: "Una nueva agencia civil, independiente de los militares, para aumentar la transparencia y el control.", detail: "Esta postura busca quitarles a los militares el control sobre las armas de los civiles. Propone crear una 'Agencia Nacional de Control de Armas (ANCA)', de carácter civil y dependiente del Ministerio de Seguridad. Se argumenta que un ente civil será más eficiente, transparente y especializado." },
                B: { text: "Mantener el sistema actual, donde la fiscalización depende de una rama de las Fuerzas Armadas (DGMN).", detail: "Esta postura confía en la institucionalidad actual de las FF.AA. para esta labor. Sostiene que el problema no es quién fiscaliza, sino la falta de recursos o la debilidad de la ley, y no ve un conflicto de interés en que los militares controlen las armas de los civiles." }
            }
        },
        {
            category: "Seguridad y Orden",
            question: "¿Qué hacer con los extranjeros que han sido condenados por delitos en Chile?",
            options: {
                A: { text: "Deben ser expulsados del país (ej. a cumplir su condena en su país de origen) lo antes posible.", detail: "Esta postura busca un 'ahorro' para el sistema carcelario y enviar una señal de 'mano dura'. Propone expulsar a miles de extranjeros condenados para 'liberar el equivalente a una cárcel completa' o expulsar automáticamente a los condenados por Ley de Drogas." },
                B: { text: "Deben cumplir su condena completa en cárceles chilenas, igual que un chileno.", detail: "Esta postura se basa en el principio de igualdad ante la ley. Sostiene que la expulsión puede ser una 'doble pena' (pena + expulsión) o, al revés, una forma de impunidad si no se garantiza el cumplimiento de la pena en el país de origen." }
            }
        },
        // Bloque B: Economía y Bolsillo
        {
            category: "Economía y Bolsillo",
            question: "Cuando un trabajador cotiza para su pensión, ¿dónde debería ir ese dinero?",
            options: {
                A: { text: "Todo el dinero debe ir a la cuenta de capitalización individual del trabajador (modelo AFP).", detail: "Esta postura defiende la propiedad individual de los fondos. Sostiene que la solidaridad debe financiarse con impuestos generales (como la PGU), pero que la cotización del trabajador es de su propiedad. Propone que cualquier cotización extra (ej. 6%) vaya íntegramente al trabajador y rechaza los fondos generacionales." },
                B: { text: "La mayor parte debe ir a su cuenta individual, pero una parte debe ir a un nuevo fondo común y solidario para mejorar las pensiones más bajas.", detail: "Esta es la postura de la reforma actualmente en discusión. Propone que la nueva cotización (ej. 6%) se divida: una parte a la cuenta individual y otra a un nuevo 'Seguro Social' o fondo solidario para mejorar las pensiones actuales, especialmente de mujeres." },
                C: { text: "Todo el dinero debe ir a un sistema de reparto estatal, público y solidario, que reemplace a las AFP.", detail: "Esta postura busca terminar con las AFP como administradoras. Propone expropiar el sistema de pensiones y crear un sistema estatal único y solidario, donde los trabajadores activos financien a los pasivos." }
            }
        },
        {
            category: "Economía y Bolsillo",
            question: "Para financiar los gastos del país (en salud, educación, seguridad), ¿qué se debería hacer con los impuestos?",
            options: {
                A: { text: "Bajar los impuestos a las empresas y a las personas para incentivar la inversión, el crecimiento y la creación de empleos.", detail: "Esta postura busca reactivar la economía 'desde arriba'. Propone rebajas de impuestos a las empresas (ej. al 23% o 0% si reinvierten), alivios tributarios a Pymes y una fuerte reducción del gasto público." },
                B: { text: "Mantener los impuestos actuales, pero reasignar el gasto público de forma más eficiente y eliminar la corrupción.", detail: "Esta postura se centra en la eficiencia del gasto, no en subir o bajar impuestos. Sostiene que el problema no es cuántos impuestos se cobran, sino la corrupción y la ineficiencia. Propone topes a sueldos públicos y suspender programas mal evaluados." },
                C: { text: "Subir los impuestos a las grandes empresas y a las personas de mayores ingresos (grandes fortunas) para financiar más derechos sociales.", detail: "Esta postura busca financiar un 'Estado Social'. Propone aumentar la carga tributaria en +3,5 puntos del PIB, crear un impuesto a las 'grandes fortunas', impuestos 'verdes' o un IVA diferenciado (0% a remedios y alimentos)." }
            }
        },
        {
            category: "Economía y Bolsillo",
            question: "¿Cuál cree usted que es el rol principal del Estado en la economía?",
            options: {
                A: { text: "El Estado debe ser lo más pequeño posible, reduciendo el gasto público y entregando la mayoría de los servicios (salud, educación) a través del sector privado.", detail: "Esta postura ve al Estado como un 'gran obstáculo' y una 'burocracia asfixiante'. Propone una 'Reducción del Estado' y que los servicios sociales se entreguen vía vouchers (bonos) o competencia privada." },
                B: { text: "El Estado debe ser un socio de los privados, regulando el mercado, corrigiendo abusos y proveyendo servicios públicos de calidad donde los privados no llegan.", detail: "Esta postura busca un equilibrio. Ve al Estado como un 'socio estratégico' o 'activo' que 'articula el desarrollo', 'acompaña' a los privados, y provee servicios donde el mercado falla." },
                C: { text: "El Estado debe ser el actor principal de la economía, controlando las industrias estratégicas (cobre, litio) y garantizando los derechos sociales para todos.", detail: "Esta postura es estatista. Propone que el Estado tome control de las industrias estratégicas, planifique la economía y sea el proveedor único de derechos sociales para sacar la 'lógica del lucro' de la salud o educación." }
            }
        },
        {
            category: "Economía y Bolsillo",
            question: "¿Cómo debería Chile aprovechar sus reservas de litio?",
            options: {
                A: { text: "Permitiendo la explotación principalmente a empresas privadas (nacionales o extranjeras) a través de concesiones, para asegurar una explotación rápida y eficiente.", detail: "Esta postura prioriza la eficiencia y la rapidez. Sostiene que el Estado es un mal administrador y que la mejor forma de capturar rentas es a través de concesiones e impuestos (royalties), permitiendo la inversión privada masiva." },
                B: { text: "A través de un modelo mixto, donde el Estado (vía Codelco u otra empresa) se asocie con empresas privadas para asegurar parte de las ganancias y el procesamiento local.", detail: "Esta postura busca un balance. El Estado (vía Codelco u otra empresa) se asocia con empresas privadas nacionales o extranjeras. En este modelo, el Estado mantiene una participación (accionista) y exige que parte del litio se procese en Chile, agregando valor." },
                C: { text: "El Litio debe ser 100% nacionalizado y explotado únicamente por el Estado de Chile, sin participación de privados.", detail: "Esta postura es soberanista y anti-imperialista. Sostiene que el litio, como el cobre, es una riqueza estratégica que pertenece a todos los chilenos y debe ser explotada solo por el Estado." }
            }
        },
        {
            category: "Economía y Bolsillo",
            question: "¿Cuál debería ser el futuro de Codelco, la empresa estatal de cobre?",
            options: {
                A: { text: "Debería ser auditada y reestructurada, permitiendo que se privatice total o parcialmente para hacerla más eficiente.", detail: "Esta postura sostiene que Codelco es ineficiente porque es estatal. Propone una 'Auditoría Estratégica' y su privatización, total o parcial, para que se gestione con lógica de mercado." },
                B: { text: "Debería modernizarse, mejorar su gestión y enfocarse en la producción de cobre y litio, como empresa estatal estratégica.", detail: "Esta es la postura de la gran mayoría. Defiende el rol estratégico de Codelco. Propone modernizarla, mejorar su gobierno corporativo, y usarla como la palanca del Estado para la explotación del litio." },
                C: { text: "Debería ser el pilar de un plan de renacionalización del cobre, absorbiendo a las mineras privadas.", detail: "Esta postura ve a Codelco como el embrión de un Estado empresario. Propone que Codelco sea la base para (re)nacionalizar toda la gran minería del cobre." }
            }
        },
        {
            category: "Economía y Bolsillo",
            question: "¿Cómo enfrentar la lentitud de los trámites y permisos del Estado?",
            options: {
                A: { text: "Con una 'Ley Rastrillo' o desregulación masiva, eliminando la mayor cantidad de permisos y normas posibles para agilizar la inversión.", detail: "Esta es una solución libertaria y de shock. Propone una 'LEY RASTRILLO' que elimine masivamente regulaciones y permisos, asumiendo que la mayoría son innecesarios y que el mercado se autorregula." },
                B: { text: "Creando una 'Ventanilla Única' digital y moderna, que simplifique y agilice los trámites sin eliminar las normas de protección (ej. ambientales).", detail: "Esta es la solución tecnócrata y la más transversal. Propone crear una 'Oficina Nacional de Inversión Productiva (ONIP)' o una 'Ventanilla Única Nacional' digital, que simplifique y agilice los trámites sin eliminar las normas de protección (ej. ambientales)." },
                C: { text: "Con una Asamblea Constituyente que rediseñe por completo la estructura del Estado para hacerlo más ágil y al servicio de las personas.", detail: "Esta es una solución refundacional. Sostiene que la burocracia no es un error, sino parte del 'Estado neoliberal' y que solo un rediseño completo del Estado puede solucionarlo." }
            }
        },
        // Bloque C: Derechos Sociales
        {
            category: "Derechos Sociales",
            question: "¿Cuál es la mejor forma de terminar con las listas de espera en los hospitales públicos?",
            options: {
                A: { text: "Entregando un 'voucher' o bono de salud directamente a las personas, para que puedan elegir atenderse en el hospital público o en una clínica privada.", detail: "Esta postura busca empoderar al paciente. El Estado le entregaría un 'voucher' (bono o cheque) para que pueda 'comprar' su atención donde la encuentre más rápido, sea en el hospital público o en una clínica privada. Esto obliga al sistema público a competir." },
                B: { text: "Fortaleciendo la colaboración público-privada, donde el Estado (Fonasa) licite y compre paquetes de cirugías al sistema privado para descongestionar.", detail: "Esta postura es pragmática. El Estado (Fonasa) sigue siendo el asegurador, pero usa su poder de compra para licitar y comprar paquetes de cirugías al sistema privado ('compra de servicios') y así descongestionar sus propios hospitales." },
                C: { text: "Invirtiendo exclusivamente en el sistema público (más hospitales, más médicos, horarios extendidos) para que el Estado pueda cubrir toda la demanda.", detail: "Esta postura defiende la salud pública. Sostiene que el dinero debe usarse para fortalecer los hospitales propios (más médicos, horarios extendidos) y crear un 'sistema nacional único' de salud, en lugar de 'desviar' fondos a clínicas privadas." }
            }
        },
        {
            category: "Derechos Sociales",
            question: "¿Cómo financiaría la educación escolar?",
            options: {
                A: { text: "Con un 'voucher' o subvención universal entregada directamente a los padres, para que elijan con total libertad el colegio de sus hijos (público o privado).", detail: "Esta postura defiende la libertad de elección total. El dinero 'sigue al estudiante'. El Estado le da un 'voucher' (subvención) a los padres para que paguen en cualquier colegio (público o privado). El objetivo es 'devolver a las familias la posibilidad de elegir'." },
                B: { text: "Con un sistema mixto, donde el Estado financie fuertemente la educación pública de calidad, pero también entregue subvenciones a colegios particulares subvencionados.", detail: "Esta es la postura del sistema actual mejorado. El Estado tiene el deber de proveer una educación pública de excelencia (ej. Liceos TP de excelencia), pero sigue financiando a los colegios particulares subvencionados, que son una parte mayoritaria del sistema." },
                C: { text: "El Estado debe financiar únicamente la educación pública, eliminando progresivamente el financiamiento estatal a colegios privados.", detail: "Esta postura busca desmantelar el sistema de subvenciones a privados. Argumenta que la educación no es un bien de consumo sino un derecho que el Estado debe proveer, terminando con el lucro." }
            }
        },
        {
            category: "Derechos Sociales",
            question: "¿Cómo debería financiarse la educación superior?",
            options: {
                A: { text: "A través de la gratuidad universal para todos los estudiantes en universidades estatales y (potencialmente) privadas que cumplan requisitos.", detail: "Esta postura defiende la educación como un derecho universal. Propone la gratuidad total en universidades estatales y, eventualmente, en todo el sistema para todos los estudiantes." },
                B: { text: "Manteniendo la gratuidad solo para los estudiantes de menores ingresos (ej. 60% más vulnerable) y mejorando los sistemas de becas y créditos para el resto.", detail: "Esta postura es de responsabilidad fiscal. Sostiene que la gratuidad universal es muy cara y la terminan pagando (con impuestos) familias de clase media. Propone focalizar la gratuidad en el 60% u 80% más vulnerable." },
                C: { text: "Eliminando la gratuidad y reemplazándola por sistemas de becas y créditos privados, basados en el mérito académico.", detail: "Esta postura es de mérito y mercado. Sostiene que la gratuidad universal 'desprecia el mérito' y que el financiamiento debe basarse en el mérito académico (becas) y sistemas de créditos." }
            }
        },
        {
            category: "Derechos Sociales",
            question: "¿Cómo solucionar el gran déficit de viviendas?",
            options: {
                A: { text: "Incentivando la construcción privada, liberando terrenos fiscales para la venta y eliminando regulaciones ('permisología') para que el mercado construya más rápido.", detail: "Esta postura es pro-mercado. Sostiene que la escasez se debe a la excesiva regulación y burocracia. Propone 'liberar' suelo (vender terrenos fiscales) y 'agilizar permisos' para que la oferta privada aumente y los precios bajen." },
                B: { text: "Con un plan de emergencia habitacional liderado por el Estado (vía SERVIU) para construir viviendas sociales, en alianza con el sector privado y cooperativas.", detail: "Esta es una postura de colaboración. El Estado lidera y financia un plan de construcción masiva (ej. 400 mil soluciones habitacionales), pero lo ejecuta en conjunto con el sector privado y cooperativas, entregando subsidios a la demanda." },
                C: { text: "Expropiando terrenos y suelos subutilizados para que el Estado construya viviendas públicas, controlando el precio del suelo.", detail: "Esta es una postura estatista y de control de precios. Sostiene que el problema es la 'especulación' del suelo y que el Estado debe intervenir el mercado, expropiar terrenos y construir vivienda pública." }
            }
        },
        // Bloque D: Visión de Sociedad y Estado
        {
            category: "Visión de Sociedad y Estado",
            question: "¿Cuál debe ser la prioridad del país?",
            options: {
                A: { text: "El crecimiento económico y la inversión deben ser la prioridad. Las normas ambientales deben flexibilizarse para no frenar proyectos importantes.", detail: "Esta postura sostiene que la riqueza es la que permite, a futuro, tener un mejor medio ambiente. Prioriza la inversión y la eliminación de la 'permisología' y considera que las regulaciones ambientales 'ideológicas' frenan al país." },
                B: { text: "Ambas son importantes. Se debe buscar un 'crecimiento sostenible', donde los proyectos paguen impuestos 'verdes' si contaminan, pero no se deben frenar.", detail: "Esta es la postura del 'desarrollo sostenible'. Reconoce que 'El cambio climático llegó: hagámonos cargo' y que es necesario avanzar en la 'transición energética', pero de forma compatible con el crecimiento, usando herramientas como 'impuestos verdes'." },
                C: { text: "La protección del medio ambiente y la crisis climática son la prioridad absoluta. Se deben rechazar los proyectos contaminantes y avanzar a una economía 'verde'.", detail: "Esta postura es ecologista. Sostiene que el modelo de crecimiento capitalista es inherentemente destructivo y debe ser reemplazado por un modelo centrado en la ecología y la seguridad alimentaria y energética." }
            }
        },
        {
            category: "Visión de Sociedad y Estado",
            question: "¿Qué rol debe tener la 'perspectiva de género' en el Estado?",
            options: {
                A: { text: "El Estado debe eliminar activamente la 'ideología de género' de las políticas públicas y la educación, y centrarse en fortalecer a la familia como núcleo de la sociedad.", detail: "Esta postura es conservadora. Sostiene que el Estado no debe promover la 'ideología de género' y debe, en cambio, 'Defender la familia' y rechazar la 'confrontación entre hombres y mujeres'." },
                B: { text: "El Estado debe enfocarse en la igualdad de oportunidades para la mujer (ej. equidad salarial, seguridad), pero sin imponer una ideología de género.", detail: "Esta es una postura liberal clásica. Apoya a la mujer (ej. 'Mujeres libres, seguras y con más oportunidades', sala cuna universal), pero evita el lenguaje de la 'perspectiva de género' o la 'paridad' obligatoria como eje de gobierno." },
                C: { text: "El Estado debe adoptar un rol activamente feminista, impulsando la paridad de género en todos los cargos públicos y la Educación Sexual Integral (ESI).", detail: "Esta postura es progresista. Propone que el Estado impulse activamente la 'paridad de género' en cargos públicos y la 'Ley de Equidad Salarial' como principios estructurantes del gobierno." }
            }
        },
        {
            category: "Visión de Sociedad y Estado",
            question: "¿Cuál debe ser la política del Estado hacia los pueblos originarios?",
            options: {
                A: { text: "Deben ser tratados bajo la misma ley que todos los chilenos, sin distinciones. El Estado debe combatir con fuerza a los grupos violentistas.", detail: "Esta postura defiende un Estado unitario. Sostiene que todos los chilenos son iguales ante la ley y que el reconocimiento de derechos especiales, escaños reservados o territorios autónomos amenaza la unidad del país y genera privilegios." },
                B: { text: "El Estado debe reconocer su deuda histórica, acelerar la compra y entrega de tierras, y promover el diálogo, pero manteniendo la unidad territorial del país.", detail: "Esta es una postura de reconocimiento cultural. Propone avanzar en la entrega de tierras, el reconocimiento constitucional de los pueblos y el diálogo, pero manteniendo la unidad territorial del país." },
                C: { text: "El Estado debe reconocer el derecho a la autodeterminación y la plurinacionalidad, permitiendo autonomías territoriales y escaños reservados.", detail: "Esta postura es refundacional. Propone un Estado 'plurinacional' que reconozca el 'derecho de autodeterminación de los pueblos originarios', lo que podría implicar autonomías territoriales." }
            }
        },
        {
            category: "Visión de Sociedad y Estado",
            question: "Tras los procesos fallidos, ¿qué se debe hacer con la Constitución?",
            options: {
                A: { text: "Se debe cerrar el debate constitucional. La Constitución actual debe mantenerse y solo reformarse en el Congreso cuando sea necesario.", detail: "Esta postura sostiene que la incertidumbre constitucional ha dañado la economía y la política. Defiende que la Constitución actual ha sido ampliamente reformada y es legítima, y que cualquier cambio futuro debe hacerse en el Congreso." },
                B: { text: "Se debe convocar a una nueva Asamblea Constituyente, 100% electa, para redactar una nueva Constitución desde cero.", detail: "Esta postura sostiene que los procesos anteriores fracasaron por estar limitados (una 'convención' y no una 'asamblea'). Propone un nuevo proceso, 100% electo y 'genuino', para 'refundar Chile' y superar el 'Estado neoliberal'." }
            }
        }
    ];

    const candidatePositions = {
        'E. Matthei':         ['B', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'A'],
        'J.A. Kast':          ['A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B', 'A', 'C', 'A', 'A', 'A', 'A', 'A'],
        'J. Jara':            ['B', 'B', 'B', 'B', 'A', 'A', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'A', 'B', 'B', 'C', 'B', 'B'],
        'H. Mayne-Nicholls':  ['B', 'C', 'B', 'B', 'A', 'A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'A'],
        'E. Artés':           ['C', 'C', 'C', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'A', 'C', 'C', 'C', 'C', 'B'],
        'F. Parisi':          ['A', 'A', 'A', 'A', 'B', 'A', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'A', 'B', 'B', 'C', 'C', 'B'],
        'M. Enríquez-Ominami':['A', 'C', 'C', 'B', 'A', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'A', 'B', 'B', 'C', 'C', 'B'],
        'J. Kaiser':          ['A', 'A', 'A', 'A', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'A', 'A', 'A']
    };

    // --- 2. ELEMENTOS DEL DOM ---
    const quizContainer = document.getElementById('quiz-container');
    const prevBtn = document.getElementById('prevBtn');
    const progressBar = document.getElementById('progress-bar');
    const tooltip = document.getElementById('tooltip');
    const resultsModal = document.getElementById('results-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const resultsList = document.getElementById('results-list');

    // --- 3. ESTADO DE LA APLICACIÓN ---
    let currentQuestionIndex = 0;
    let userAnswers = new Array(questions.length).fill(null);

    // --- 4. FUNCIONES PRINCIPALES ---

    /**
     * Construye las tarjetas de preguntas en el HTML a partir de los datos.
     */
    function loadQuestions() {
        quizContainer.innerHTML = '';
        questions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `question-${index}`;

            let optionsHTML = '';
            for (const key in q.options) {
                optionsHTML += `
                    <label class="option" data-tooltip="${q.options[key].detail}">
                        <input type="radio" name="question${index}" value="${key}">
                        ${q.options[key].text}
                    </label>
                `;
            }

            card.innerHTML = `
                <div class="category">${q.category}</div>
                <p class="question-text">${q.question}</p>
                <div class="options-group">${optionsHTML}</div>
            `;
            quizContainer.appendChild(card);
        });

        addEventListeners();
    }

    /**
     * Agrega los event listeners a las opciones de respuesta y tooltips.
     */
    function addEventListeners() {
        document.querySelectorAll('.option input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', handleOptionSelect);
        });

        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('mouseover', showTooltip);
            option.addEventListener('mousemove', moveTooltip);
            option.addEventListener('mouseout', hideTooltip);
        });
    }

    /**
     * Maneja la selección de una opción, guarda la respuesta y avanza a la siguiente pregunta.
     * @param {Event} e - El evento de cambio del input radio.
     */
    function handleOptionSelect(e) {
        const questionIndex = parseInt(e.target.name.replace('question', ''));
        userAnswers[questionIndex] = e.target.value;

        // Feedback visual inmediato
        const options = document.querySelectorAll(`input[name="question${questionIndex}"]`);
        options.forEach(opt => opt.parentElement.classList.remove('selected'));
        e.target.parentElement.classList.add('selected');

        // Avance automático
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                showQuestion(currentQuestionIndex);
            } else {
                calculateAndDisplayResults();
            }
        }, 400);
    }

    /**
     * Muestra la tarjeta de la pregunta actual y actualiza la UI.
     * @param {number} index - El índice de la pregunta a mostrar.
     */
    function showQuestion(index) {
        const cards = document.querySelectorAll('.question-card');
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');

        // Actualizar la barra de progreso
        const progress = ((index + 1) / questions.length) * 100;
        progressBar.style.width = `${progress}%`;

        // Restaurar la selección si el usuario retrocede
        if (userAnswers[index]) {
            const selectedRadio = document.querySelector(`input[name="question${index}"][value="${userAnswers[index]}"]`);
            if (selectedRadio) {
                selectedRadio.parentElement.classList.add('selected');
            }
        }
        
        prevBtn.classList.toggle('hidden', index === 0);
    }

    /**
     * Calcula los puntajes de afinidad y muestra el modal con los resultados.
     */
    function calculateAndDisplayResults() {
        const scores = {};
        for (const candidate in candidatePositions) {
            scores[candidate] = 0;
            candidatePositions[candidate].forEach((pos, index) => {
                // Asegurarse de que la pregunta exista antes de comparar
                if (index < userAnswers.length && userAnswers[index] === pos) {
                    scores[candidate]++;
                }
            });
        }

        resultsList.innerHTML = '';
        const sortedCandidates = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
        const totalQuestions = questions.length;

        sortedCandidates.forEach(candidate => {
            const affinityPercentage = ((scores[candidate] / totalQuestions) * 100).toFixed(0);
            const li = document.createElement('li');
            li.innerHTML = `
                <span><strong>${candidate}</strong></span>
                <span class="score">${affinityPercentage}%</span>
            `;
            resultsList.appendChild(li);
        });

        resultsModal.classList.remove('hidden');
    }

    // --- 5. FUNCIONES PARA TOOLTIPS ---

    function showTooltip(e) {
        const tooltipText = e.currentTarget.getAttribute('data-tooltip');
        if (tooltipText) {
            tooltip.textContent = tooltipText;
            tooltip.classList.remove('hidden');
            tooltip.classList.add('visible');
        }
    }

    function moveTooltip(e) {
        // Posiciona el tooltip cerca del cursor, evitando que se salga de la pantalla
        const x = e.pageX + 15;
        const y = e.pageY + 15;
        const tooltipRect = tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        tooltip.style.top = `${y}px`;
        if (x + tooltipRect.width > viewportWidth) {
            tooltip.style.left = `${e.pageX - tooltipRect.width - 15}px`;
        } else {
            tooltip.style.left = `${x}px`;
        }
    }

    function hideTooltip() {
        tooltip.classList.remove('visible');
        tooltip.classList.add('hidden');
    }
    
    // --- 6. EVENT LISTENERS DE NAVEGACIÓN Y MODAL ---

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });

    closeModalBtn.addEventListener('click', () => resultsModal.classList.add('hidden'));

    resultsModal.addEventListener('click', (e) => {
        if (e.target === resultsModal) {
            resultsModal.classList.add('hidden');
        }
    });
    
    // --- 7. INICIALIZACIÓN ---
    loadQuestions();
    showQuestion(0);
});