const defaultConfig = {
	username: "",
	theme: {
		backgroundColor: "#192330",
		windowColor: "#1E2021",
		glowColor: "#0000002e",
		white: "#E5E9F0",
		gray: "#d8dee9",
		black: "#3B4252",
		blue: "#A1B5CE"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: false,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "",
		placeholderColor: "blue",
		userColor: "blue",
		atColor: "blue",
		hostColor: "blue",
		promptColor: "blue",
		promptSymbol: "❯",
		caretColor: "white",
		selectionBg: "blue",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "Stuff",
				color: "blue",
				align: "left",
				links: [
					{
						"name": "Gmail",
						"url": "https://mail.google.com/mail/u/1/#inbox",
						"icon": "mdi:email"
					},
					{
						"name": "Reddit",
						"url": "https://www.reddit.com",
						"icon": "mdi:reddit"
					},
					{
						"name": "Twitter",
						"url": "https://www.twitter.com",
						"icon": "mdi:twitter"
					},
					{
						"name": "Youtube",
						"url": "https://www.youtube.com",
						"icon": "mdi:youtube"
					},
					{
						"name": "Flipboard",
						"url": "https://flipboard.com",
						"icon": "mdi:newspaper-variant"
					}
				]
			},
			{
				title: "University",
				color: "blue",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "GitLab",
						url: "https://gitlab.com",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					}
				]
			},
			{
				title: "Watch",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "Mastodon",
						url: "https://mastodon.social/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Polywork",
						url: "https://polywork.com",
						icon: "simple-icons:polywork"
					}
				]
			},
			{
				title: "Comics",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Polygon",
						url: "https://polygon.com",
						icon: "uil:polygon"
					},
					{
						name: "IGN",
						url: "https://ign.com",
						icon: "mdi:currency-sign"
					},
					{
						name: "RPS",
						url: "https://rockpapershotgun.com/",
						icon: "ph:toilet-paper-bold"
					},
					{
						name: "80lv",
						url: "https://80.lv/",
						icon: "tabler:hand-rock"
					}
				]
			},
			{
				title: "More Stuff",
				color: "blue",
				align: "left",
				links: [
					{
						name: "PopSci",
						url: "https://popsci.com/",
						icon: "material-symbols:science"
					},
					{
						name: "Space",
						url: "fa6-solid:user-astronaut",
						icon: "mdi:reddit"
					},
					{
						name: "NASA",
						url: "https://blogs.nasa.gov/",
						icon: "simple-icons:nasa"
					},
					{
						name: "ESA",
						url: "https://blogs.esa.int/",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Other Stuff",
				color: "blue",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Verge",
						url: "https://www.theverge.com/",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "9To5 Linux",
						url: "https://9to5linux.com/",
						icon: "uil:linux"
					}
				]
			}
		]
	}
}

export default defaultConfig
