const defaultConfig = {
	username: "",
	theme: {
		backgroundColor: "#192330",
		windowColor: "#1E2021",
		glowColor: "#A1B5CE",
		white: "#E5E9F0",
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
		selectionFg: "white"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "blue",
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
				alias: "y",
				name: "YouTube Search",
				url: "https://www.youtube.com/results?search_query={}"
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
						"url": "https://moodle4.city.ac.uk/my",
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
						name: "Twitch",
						url: "https://www.twitch.tv",
						icon: "mdi:twitch"
					},
					{
						name: "Spotify",
						url: "https://open.spotify.com",
						icon: "mdi:spotify"
					},
					{
						"name": "YouTube",
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
						name: "1337x",
						url: "https://1337x.to",
						icon: "mdi:movie-search"
					},
					{
						name: "Bitsearch",
						url: "https://bitsearch.to",
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
				title: "Socials",
				color: "blue",
				align: "left",
				links: [
					{
						"name": "Reddit",
						"url": "https://www.reddit.com",
						"icon": "mdi:reddit"
					},
					{
						name: "TikTok",
						url: "https://www.tiktok.com",
						icon: "ic:baseline-tiktok"
					},
					{
						"name": "Twitter",
						"url": "https://www.twitter.com",
						"icon": "mdi:twitter"
					},
					{
						name: "Discord",
						url: "https://discord.com/channels/686053708261228577/694233507500916796",
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
						name: "GitHub",
						url: "https://github.com",
						icon: "carbon:logo-github"
					},
					{
						name: "ChatGPT",
						url: "https://chat.openai.com/chat",
						icon: "tabler:brand-openai"
					},
					{
						name: "Bing AI",
						url: "https://www.bing.com/search?q=Bing+AI&showconv=1",
						icon: "simple-icons:microsoftbing"
					},
					{
						name: "Monkeytype",
						url: "https://monkeytype.com",
						icon: "material-symbols:keyboard-alt-rounded"
					},
					{
						name: "Hacker News",
						url: "https://news.ycombinator.com",
						icon: "fa6-brands:square-hacker-news"
					}
				]
			},
			{
				title: "Comics",
				color: "blue",
				align: "left",
				links: [
					{
						name: "xkcd",
						url: "https://xkcd.com",
						icon: "mdi:comic-bubble" 
					},
					{
						name: "SMBC",
						url: "https://www.smbc-comics.com",
						icon: "mdi:comic-bubble"
					},
					{
						name: "Swords",
						url: "https://swordscomic.com",
						icon: "mdi:comic-bubble"
					},
					{
						name: "Loading Artist",
						url: "https://loadingartist.com/comic/cut-it-out",
						icon: "mdi:comic-bubble"
					},
					{
						name: "Cyanide and Happiness",
						url: "https://explosm.net/comics/latest",
						icon: "mdi:comic-bubble"
					}
				]
			}
		]
	}
}

export default defaultConfig
