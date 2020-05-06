<script>
	import SummitChecklist from '../components/SummitChecklist.svelte';
	const summitLists = {
	//replace 'name' with "<a href='path/to/post'> Mt. Whatever </a>" to link table row to corresponding blog post
    list1: [
        {name: "Mt. Washington", done:""},
		{name: "Mt. Adams", done: ""},
		{name: "Mt. Jefferson", done: ""},
		{name: "Mt. Monroe", done: ""},
		{name: "Mt. Madison", done: ""},
		{name: "Mt. Lafayette", done: ""},
		{name: "Mt. Lincoln", done: ""},
		{name: "South Twin", done: ""}
    ],
    list2: [
        {name: "Carter Dome", done:""},
		{name: "Mt. Moosilauke", done: ""},
		{name: "Mt. Eisenhower", done: ""},
		{name: "North Twin", done: ""},
		{name: "Mt. Carrigain", done: ""},
		{name: "Mt. Bond", done: ""},
		{name: "Middle Carter", done: ""},
		{name: "West Bond", done: ""}
	],
	list3: [
        {name: "Mt. Garfield", done:""},
		{name: "Mt. Liberty", done: ""},
		{name: "South Carter", done: ""},
		{name: "Wildcat A", done: ""},
		{name: "Mt. Hancock", done: ""},
		{name: "South Kinsman", done: ""},
		{name: "Mt. Field", done: ""},
		{name: "Mt. Osceola", done: ""}
	],
	list4: [
        {name: "Mt. Flume", done:""},
		{name: "South Hancock", done: ""},
		{name: "Mt. Pierce", done: ""},
		{name: "North Kinsman", done: ""},
		{name: "Mt. Willey", done: ""},
		{name: "Bondcliff", done: ""},
		{name: "Mt. Zealand", done: ""},
		{name: "North Tripyramid", done: ""}
	],
	list5: [
		{name: "Mt. Cabot", done:""},
		{name: "East Osceola", done:""},
		{name: "Middle Tripyramid", done:""},
        {name: "Cannon Mountain", done:""},
		{name: "Mt. Hale", done: ""},
		{name: "Mt. Jackson", done: ""},
		{name: "Mt. Tom", done: ""},
		{name: "Wildcat D", done: ""},
	],
	list6: [
		{name: "Mt. Moriah", done: ""},
		{name: "Mt. Passaconaway", done: ""},
		{name: "Owl's Head", done: ""},
		{name: "Mt. Galehead", done: ""},
		{name: "Mt. Whiteface", done: ""},
		{name: "Mt. Waumbek", done: ""},
		{name: "Mt. Isolation", done: ""},
		{name: "Mt. Tecumseh*", done: ""}
	]
}
</script>
<style>
	h1, h2, figure {
		text-align: center;
		margin: 0 auto;

	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	h2 {
		font-size: 1.8em;
		font-weight: 500;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	div {
   		display: flex;
    	justify-content: center
    }

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Couch to 4k Blog</title>
</svelte:head>

<h1>Couch to 4k</h1>
<h2>My Quest to Climb NH's 48 Four-Thousand Footers with my Dog</h2>

<figure>
	<span><img alt='My dog on the couch' src='homepage/couch-dog.jpg'/>
	&nbsp;&nbsp;&nbsp;
	<img alt='My dog on a mountain' src='homepage/summit-laying-down.jpg'/></span>
</figure>

<div>
	<SummitChecklist summits={summitLists.list1}/>
	<SummitChecklist summits={summitLists.list2}/>
	<SummitChecklist summits={summitLists.list3}/>
	<SummitChecklist summits={summitLists.list4}/>
	<SummitChecklist summits={summitLists.list5}/>
	<SummitChecklist summits={summitLists.list6}/>
</div>

