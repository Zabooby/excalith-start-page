const defaultConfig = {
	username: "",
	theme: {
		backgroundColor: "#192330",
		windowColor: "#1E2021",
		glowColor: "#0000002e",
		white: "#E5E9F0",
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
		promptColor: "white",
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
		hoverColor: "blue"
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
						"name": "Email",
						"url": "https://outlook.office.com/mail/inboxhttps://moodle.city.ac.uk/my",
						"icon": "mdi:email"
					},
					{
						"name": "ICAEW",
						"url": "https://bibliu.com/app/#/library",
						"icon": "mdi:book"
					},
					{
						"name": "Moodle",
						"url": "https://moodle.city.ac.uk/my",
						"icon": "mdi:view-dashboard"
					},
					{
						"name": "LinkedIn",
						"url": "https://moodle.city.ac.uk/pluginfile.php/2547444/mod_resource/content/1/Prof%20Skills%20Networking%20%20LinkedIn%20Workshop%2021_22.pdf",
						"icon": "mdi:linkedin"
					},
					{
						"name": "Timetable",
						"url": "https://mytimetable.city.ac.uk/#/app/my-timetable",
						"icon": "mdi:timetable"
					}
				]
			},
			{
				title: "Watch",
				color: "blue",
				align: "left",
				links: [
					{
						name: "IMDb",
						url: "https://www.imdb.com",
						icon: "cib:imdb"
					},
					{
						name: "Nyaa",
						url: "https://nyaa.si",
						icon: "mdi:movie-search"
					},
					{
						name: "RARBG",
						url: "https://rarbg.to/torrents.php",
						icon: "mdi:movie-search"
					},
					{
						name: "1337x",
						url: "https://1337x.to",
						icon: "mdi:movie-search"
					},
					{
						name: "MyAnimeList",
						url: "https://myanimelist.net",
						icon: "simple-icons:myanimelist"
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
						name: "Twitch",
						url: "https://www.twitch.tv",
						icon: "mdi:twitch"
					},
					{
						name: "TikTok",
						url: "https://www.tiktok.com",
						icon: "ic:baseline-tiktok"
					},
					{
						name: "Spotify",
						url: "https://open.spotify.com",
						icon: "mdi:spotify"
					},
					{
						name: "Discord",
						url: "https://discord.com/channels/686053708261228577/69423350750091679",
						icon: "ic:baseline-discord"
					},
					{
						name: "Instagram",
						url: "https://instagram.com",
						icon: "mdi:instagram"
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
