module.exports = [
	{
		"type": "heading",
		"defaultValue": "Ajustes"
	},
	{
		"type": "text",
		"defaultValue": "Esta es la página de ajustes para la app Breathe. Estás usando la version 0.2.4 de la app.",
	},
	{
		"type": "section",
		"items": [
			{"type": "heading",
			 "defaultValue": "Colores"
			},
			{
				"type": "color",
				"messageKey": "backgroundColor",
				"defaultValue": "000000",
				"label": "Color de fondo",
				"sunlight": true,
				"layout": "BLACK_WHITE"
			},
			{
				"type": "color",
				"messageKey": "circleColor",
				"defaultValue": "00AA55",
				"label": "Color del círculo",
				"sunlight": true,
				"capabilities": ["COLOR"]
			}
		]
	},
	{
		"type": "section",
		"items": [
			{"type": "heading",
			 "defaultValue": "En la app"
			},
			{
				"type": "toggle",
				"messageKey": "rememberDuration",
				"defaultValue": false,
				"label": "¿Recordar la duración anterior y usarla cuando se lance la app?",
			},
			{
				"type": "toggle",
				"messageKey": "vibrationEnabled",
				"defaultValue": true,
				"label": "¿Activar las vibraciones durante la respiración?",
			}
		]
	},
	{
		"type": "section",
		"capabilities": ["NOT_PLATFORM_APLITE", "NOT_PLATFORM_BASALT", "NOT_PLATFORM_CHALK"],
		"items": [
			{"type": "heading",
			 "defaultValue": "Salud"
			},
			{
				"type": "toggle",
				"messageKey": "heartRateEnabled",
				"defaultValue": true,
				"label": "¿Mostrar el ritmo cardiaco?",
				"description": "Si activado, el app mostrará el ritmo cardiaco en el menú principal. Si no, el app mostrará el número de pasos que has tomado hoy."
			}
		]
	},
	{
		"type": "section",
		"items": [
			{
				"type": "heading",
			 	"defaultValue": "Recordatorios"
			},
			{
				"type": "select",
				"messageKey": "reminderHours",
				"defaultValue": "4",
				"label": "Recuérdame de respirar...",
				"description": "El app te recordará a este intervalo diariamente, de 8:00 de la mañana hasta 8:00 de la tarde.",
				"options": [
					{ 
						"label": "Cada hora", 
						"value": "1" 
					},
					{ 
						"label": "Cada 2 horas", 
						"value": "2" 
					},
					{ 
						"label": "Cada 3 horas",
						"value": "3" 
					},
					{ 
						"label": "Cada 4 horas",
						"value": "4" 
					},
					{ 
						"label": "Cada6 horas",
						"value": "6" 
					},
					{ 
						"label": "No me recuerda nunca",
						"value": "0" 
					}
				]
			}
		]
	},
	{
	"type": "submit",
	"defaultValue": "Guardar mis ajustes"
	}
];