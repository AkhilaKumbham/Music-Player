document.addEventListener("DOMContentLoaded", function(){

    // Array of song objects with details
    const songs = [
        {
            title: "Aaraduguluntada",
            duration: "4:05",
            thumbnail: "./data/image10.png",  
            src: "Aaraduguluntada.mp3",
            artist: `Maheshbabu,Samantha`,
            year: 2013,
            description:`Aaraduguluntada..yedadugulestada..emadigina ichevaada
aasa pedutundata..aata padutuntada..andariki nachesevada
sarigga sarigga sarigga nilavavendhuke
berugga berugga aipoke
baduledi ivvakunda vellipoke
Aaraduguluntada..yedadugulestada..emadigina ichevaada
aasa pedutundata..aata padutuntada..andariki nachesevada
Matala itukalatho gundello kotalu katteida
kaburula chinukulatho podi kalalanni tadipeyada
oosula urukulatho oohalake oopiri oopeyada
palukula alikidi tho aasalake aayuvu poyada
mouname vadu unte..pranamemavvuno
nuvve na prapancham anestu venaka tirugutu..nuvvena samastam antade
kalalona kuda kanukandaneede..
Adigina Samayam lo tanu alavokaga nanu moyali
sogasunu pogadadame tanaku alavataipovali
panulanu panchukune manasunte inkem kavali
alakani telsukuni andam ga batimalali
korikedaina kani teerchi teeralani
atanne atanne atanne chudataniki
vayasse tapisthu untunde
apudinka vadu nannu cheruthade`
        },
        {
            title: "Siya Ram",
            duration: "3:48",
            thumbnail: "./data/image3.png",  
            src: "128-Ram Siya Ram - Adipurush 128 Kbps.mp3",
            artist: "Kriti sanon, Prabhas",
            year: 2023,
            description:           
           `Ho Janam Janam Ki Khoj Bataye
Ram Se Chalke Ram Pe Aaye
Prem Koyi Hum Aur Na Jaane
Ram Se Roothe Ram Se Maane
Ram Siya Ki Karun Kahaani
Ek Hai Chandan Ek Hai Paani
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Hari Anant Hari Katha Ananta
Kahahin Sunahi Bahuvidhi Sab Santa
Ram Ratan Dhan Jo Koyi Paaye
Jeevan Bhar Ramayan Gaye
Mangal Bhavan Amangal Haari
Drabahu Sudasarath Ajar Bihari
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram
Ram Siya Ram
Siya Ram Jai Jai Ram`
        },      
        {
            title: "Srivalli",
            duration: "3:40",
            thumbnail: "./data/image6.png",  
            src: "[iSongs.info] 02 - Srivalli.mp3",
            artist: "Rashmika, Arjun",
            year: 2023,
            description:`Choope Bangaramaayane, Srivalli
Navve Navarathnamaayene
Annitiki Epudu Mundunde Nenu
Mee Enake Ipudu Paduthunnaanu
Evvariki Epudu Thalavanchani Nenu
Nee Patee Choosetandhuku
Thalane Vanchaanu
Intha Bathuku Bathiki
Nee Inti Chuttu Thirigaane
Isumantha Nannu Choosthe Chaalu
Chaalanukunnaane
Choope Bangaramaayane, Srivalli
Maate Maanikyamaayene
Choope Bangaramaayane, Srivalli
Navve Navarathnamaayene
Nee Snehithuraallu O Mostharuguntaaru
Andukane Emo Nuvvandanguntaavu
Paddhenimidhi Ellu Vachhaaya Chaalu
Nuvvekaadevvarainaa Mudduga Untaaru
Erra Chandanam Cheera Kadithe
Raayi Kooda Raakumaare
Edu Raalla Dhuddhulu Pedithe
Evathainaa Andagatthe, Ayinaa
Choope Bangaramaayane, Srivalli
Maate Maanikyamaayene
Choope Bangaramaayane, Srivalli
Navve Navarathnamaayene`
        },
        {
            title: "Ladu ganni pelli",
            duration: "0:31",
            thumbnail: "./data/image9.png",  
            src: "laddugannipelli.mp3",
            artist: "Bheems Ceciroleo, Mangli",
            year: 2024,
            description:`Laddu Gaadu Maa Laddu Gaadu
Mama Laddu Gaani Pelli
Ika Chusuko Lolli Lolli
Maa Laddu Gaani Pelli
Evadu Aapthado Deenthalli
Maa Pelli Pillaa
Maa Pelli Pillaa
Maa Pelli Pillaa Pooja
Teenmaru Bandu Bhaja`     
  },
        {
            title: "Inthalo Ennenni Vinthalo",
            duration: "2:31",
            thumbnail: "./data/image5.png",  
            src: "[iSongs.info] 04 - Inthalo Ennenni Vinthalo (Female).mp3",
            artist: "Swathi,Nikhil",
            year: 2014,
            description:`Inthalo ennenni vinthalo
Alavaatulo porapaatulennenno
Sootigaa ninu choodalenu
Thera chatugaa ninu choosanu
Aayuvo nuvu aashavo
Nuvu veedani thudi swasavo
Raayani o geyamo
Nuvu evarivo halaa
Inthalo ennenni vinthalo
Alavatulo porapaatulennenno
Parichayame paravasamai
Ninu naatho kalipindhi
Rasundhe jarigindhi
Ayinaa kalalaa undhi
Okatayagaa meelo ika
Neelo unta mari nenika
Lene ledhika theerika
Andhi manasulo kalayikaa
O inthalo ennenni vinthalo
Alvaatulo porapaatulennenno
`        },
        {
            title: "Yedurangula Vaana",
            duration: "4:21",
            thumbnail: "./data/image2.png",  
            src: "[iSongs.info] 03Yedurangula Vaana.mp3",
            artist: "Anupama, Nikhil, ",
            year: 2023,
            description:`
Yedurangula vaana
Rendu kallal lona
Karanam yevarante
Aksharala nuvve
Enninalluga unna
Ippude puduthunna
Karanam yevarante
Kachchithamga nuvve
Mabbunee merupunee
Kalipina vaanalle
Pedhavuki navvukee
Parichayam nee valle
Chigurupai chinukule
Egirithe yenthandham
Manasuko gnaapakam
Dorikithe aanandham
Bina binankini anandhini nuvve
Aravindamai nanne cherinaave
Naa vandanam neeke
Bina binankini anandhini nuvve
Aravindamai nanne cherinaave
Naa vandanam neeke
Yedurangula vaana
Rendu kallal lona
Karanam yevarante
Aksharala nuvve
Neekantu bhashokatundi auna
Palikincha galavuga raallanaina
Kasinni maatale
Konni palakarimpule
Kottha gonthe vachchenantu
Pulakarinche hrudayame
Yevarive nuvvani
Vivarame adigaanu
Badhuluga naaku ne
Dorikithe yem chainu
Nannilaa thakinaa
Keratame yedantu
Kadaline aduguthu
Vodduney vechaanu
Yedurangula vaana
Rendu kallal lona
Karanam yevarant
Aksharala nuvve
Enninaalluga unna
Ippude puduthunna
Karanam yevarante
Kachchithamga nuvve
Bina binankini anandhini nuvve
Aravindamai nanne cherinaave
Naa vandanam neeke
Bina binankini anandhini nuvve
Aravindamai nanne cherinaave
Naa vandanam neeke`
        },
        {
            title: "Oye Meghamla",
            duration: "4:23",
            thumbnail: "./data/image1.png",  
            src: "Oye-Meghamla.mp3",
            artist: "Anu emmanuel, Nani",
            year: 2016,
            // added  new properties
            description:`
            Oye meghamlaa
            Thelindhe naa chinni manase
            Hey mila mila la
            Minugurulaa maarindhi varase
            Kannulaki ee rojilaa andhanga
            Lokam kanipinchene nee vallaa
            Chaala baagundhe nee ventunte
            Yedho avuthundhe neethovunte
            Oye meghamlaa
            Thelindhe naa chinni manase
            Hey mila mila la
            Minugurula maarindhi varase
            Kallagantha kattinaa
            Kallamundhu vaalene
            Vinthalanni nuvvu pakkanunte
            Pillagali kooda paaduthondhi kotha paate
            Oho..Yentha dhooramellinaa
            Jantakatti vachene
            Kaali gurthulanni manavente
            Mandutenda vendi vennelai poose
            Pedhavulu theliyani raagam theese
            Thalupulu thiyyani kavithalu raase
            Oka aase virabusse
            Naa manasu palikedhi nee oosey
            Oye meghamlaa
            Thelindhe naa chinni manase
            Hey mila mila la    
            Minugurula maarindhi varase
            Cheyyipatti aapana
            Thittikotti aapana
            Parugupette ee nimishaani
            Ee kshaname saaswathame ayiponi
            Oh vellanivvananthagaa hathukunnaayigaa
            Ee theepi gnaapakalanni
            Oopirunnadhaaka chinni
            gunde dhaachipettukoni
            Yenthani aapanu naa praananni
            Oye yemani dhaachanu naa hrudhayanni
            Neethone cheppainee
            Yee bayata padaleni mounaani
            Oye neevalle
            Guvvalle yegirindhi manase
            Hey eeroje
            Naa kalalo vundhevaro thelise
            Puttina innaallakaa vachedhi?
            Veduka innellakaa thechedhi?
            Chaala baagundhe nee ventunte
            Yedho avuthundhe neethovunte`,
        },
        {
            title: "Manasilaayo",
            duration: "0:37",
            thumbnail: "./data/image7.png",  
            src: "maanasilayo.mp3",
            artist: "Manju,RajiniKanth",
            year: 2024,
            description:`Aei ra ra raamaiya,
Nee wrong-aa paathaa saedhaaram dhan,
Aei ra ra raakkammaa,
Annan sodakku poatta sambavam dhan…
Adi adi adi adi adi,
Therikka vittaan vannalley,
Unmai sonna manasilayo…
Adi adi adi adi adi adi,
Appolikka vannalley,
Onna ninna manasilayo…
Therikkavittaan vannalley,
Adi polikka vannalley,
Therikkavittaan vannalley,
Adi polikka vannalley…
Therikkavittaan vannalle,
Adi polikka vannalle,
Therikkavittaan vannalle,
Adi polikka vannalle…`
        },
        {
            title: "Ashtalakshmi stotram",
            duration: "0:31",
            thumbnail: "./data/image4.png",  
            src: "ashtalakshmitotram.mp3",
            artist: "stephen devassy",
            year: 2018,
            description:`Sumanasavandit Sundari Maadhavi Chandra Sahodari Hemamaye
Munigan Vandit Mokshapradayini Manjulabhashini Vedanute
Pankajavasini Devasupoojita Sadgoonavarshini Shantiyute
Jai Jai Hey Madhusoodan Kaamini Aadilakshmi Sada Paalay Maam`},
        {
            title: "kGF Kanasugala",
            duration: "1:50",
            thumbnail: "./data/image8.png",  
            src: "Kanasugala.mp3",
            artist: "Srinidhi, Yash",
            year: 2019,
            description:`Kooti kanasugala aramanege
Dhairya needo kaavalu naanaaguvenamma
Bhoomi nodi oolo negilige
Baladhi hegala needalu naanilluvenamma
Uri jwaale haridu suduthire jagavanne
Thanisuva maleyaaguve kelamma...
Haa ah aa...aa..aah
Aah aa aa aa aa...aa..aah
Aah aa aa aa aa...aa..aah
Aah aa aa aa aa...aa..aah
(Aah aa aa aa aa......)
Thandaaninaane thaanithandaano
Thaanenaanenaa...
Hey thandaaninaane thaanithandaano
Thaanenaanenoo...
Thandaaninaane thaanithandaano
Thaanenaanenaa...
Hey thandaaninaane thaanithandaano
Thaanenaanenoo...`
        },
    ];
    // Create a new audio object
    let audio = new Audio();
    // Access various elements in the DOM
    const songList = document.getElementById("song-list");
    const thumbnail = document.getElementById("thumbnail");
    const trackTitle = document.getElementById("player-title");
    const trackDescription = document.getElementById("player-description");
    const progress = document.getElementById("progress");
    const currTime = document.getElementById("current-time");
    const leftTime = document.getElementById("time-left");
    const playPauseBtn = document.getElementById("play-pause");
    //const restartBtn = document.getElementById("restart");
    //const stopBtn = document.getElementById("stop");
    const volumeControl = document.getElementById("volume"); 
    // level 2 new buttons adding
    // Adding shuffle and loop buttons to handle shuffling and looping
    const shuffleBtn = document.getElementById("shuffle");
    const shuffleImg=document.getElementById("shuffle-img")
    const prevBtn=document.getElementById("prev");
    const nextBtn=document.getElementById("next")
    const loopImg= document.getElementById("repeat-img");
    const repeatBtn=document.getElementById("repeat");
    const customDropdown=document.getElementById("custom-dropdown");
    const dropdownItems=document.querySelectorAll(".custom-dropdown-item");
    // Event listener 
    prevBtn.addEventListener("click",prevSong);
    nextBtn.addEventListener("click",()=>nextSong(true));
    // ended song redirect to next song by default
    audio.addEventListener("ended",()=>nextSong(false));
    shuffleBtn.addEventListener("click",toggleShuffleMode);
    repeatBtn.addEventListener("click",toggleRepeatMode);
    customDropdown.addEventListener("click",toggleDropdown);
    // acessing thumbnail container id from html for display thumbnail images  
   const thumbnailContainer=document.getElementById("thumbnail-container");
   thumbnailContainer.addEventListener("click",openpreviewModal);
    // Add event listeners for play, restart, stop, and progress actions
    playPauseBtn.addEventListener("click", playPause);
    //restartBtn.addEventListener("click", restart);
   // stopBtn.addEventListener("click", stopTrack);
    progress.addEventListener("input", function(){
        audio.currentTime = progress.value;
    });
    volumeControl.addEventListener("input", updateVolume);
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("play", () => updatePlayPauseButton(true));
    audio.addEventListener("pause", () => updatePlayPauseButton(false));
    // Track the currently playing song
    let currentSongIndex = 0;
    // shuffle song and repeat mode by default
    let isShuffleMode=true;
    let isRepeatMode=false;
    loadSong(currentSongIndex);
    // Update the play/pause button based on playback state
    const updatePlayPauseButton = (paused) => {
        playPauseBtn.innerHTML = paused
            ? `<img src="icons/pause-button.svg">`
            : `<img src="icons/play-button.svg">`;
    };
    // Function to play or pause the current song
    function playPause(){
        if(audio.paused){
            audio.play();
            updatePlayPauseButton(audio.paused);
        } else {
            audio.pause();
            updatePlayPauseButton(audio.paused);
        }
    }
    // Function to load and display the selected song
    function loadSong(index){
        const currentSong = songs[index];
        audio.src = currentSong.src;
        thumbnail.src = currentSong.thumbnail;
        trackTitle.innerHTML = currentSong.title;
        trackDescription.innerHTML = currentSong.artist;
        leftTime.textContent = "00:00";
        audio.addEventListener("loadedmetadata", function(){
            progress.max = audio.duration;
        });
        updateCurrentSongHighlight(index);
    }
    // Function to restart the current song
  /*  function restart(){
        audio.currentTime = 0;
        progress.value = 0;
    }
    // Function to stop the current song and reset progress
    function stopTrack(){
        audio.currentTime = 0;
        audio.pause();
        updatePlayPauseButton(false);
    }*/
// navigate to previous song
function prevSong(){
    currentSongIndex=currentSongIndex-1;
    loadSong(currentSongIndex);
    audio.play();
}
// nextbutton
function nextSong(isBtnClicked){
    if(isShuffleMode||isBtnClicked)
    {
    currentSongIndex=currentSongIndex + 1;
    loadSong(currentSongIndex);
    audio.play();
    }
    else{
        audio.currentTime=0;
        progress.value=0;
        audio.play();
    }
}
function toggleShuffleMode(){
    isShuffleMode=true;
    isRepeatMode=false;
    shuffleImg.src="./icons/shuffle-highlighted.svg"
    loopImg.src="./icons/loop.svg"
    updateButtonState(shuffleBtn, isShuffleMode)
}
function toggleRepeatMode(){
    isShuffleMode=false;
    isRepeatMode=true;
    shuffleImg.src="./icons/shuffle.svg"
     loopImg.src="./icons/loop-highlighted.svg"
     updateButtonState(repeatBtn, isRepeatMode)
}
function updateButtonState(button,isActive){
if(isActive){
    button.classList.add("selected")
}
else{
    button.classList.remove("selected")
}
}
function toggleDropdown(){
    if(document.getElementById("dropdown-list-items").style.display==="block"){
document.getElementById("dropdown-list-items").style="display:none";
    }
    else{
document.getElementById("dropdown-list-items").style="display:block"
    }
}
dropdownItems.forEach(function(item){
    item.addEventListener("click",function(){
        const selectedVal=this.getAttribute("data-value");
        audio.playbackRate=parseFloat(selectedVal)
        dropdownItems.forEach(function(item){
            item.classList.remove("selected-speed");
        });
        this.classList.add("selected-speed");
    })
})
    // Update the audio volume based on the range slider
    function updateVolume(){
        audio.volume = volumeControl.value;
    }
    // Function to update the progress bar and remaining time as the song plays
    function updateProgress(){
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const remainingTime = duration - currentTime;

        progress.value = currentTime;
        currTime.textContent = formatTime(currentTime);
        leftTime.textContent = `-${remainingTime >= 0 ? formatTime(remainingTime) : "00:00"}`;
    }
    // Helper function to format time in MM:SS format
    function formatTime(time){
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${padZero(minutes)}:${padZero(seconds)}`;
    }
    // Helper function to pad single digits with a zero
    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }
    // Highlight the currently playing song in the track list
    function updateCurrentSongHighlight(index){
        const songItems = document.querySelectorAll(".item-container");
        songItems.forEach((element) => {
            element.classList.remove("current-song");
        });
        const currentSongElement = document.querySelector(`.item-container[data-index="${index}"]`);
        if (currentSongElement) {
            currentSongElement.classList.add("current-song");
        }
    }
    // Render the list of songs in the left menu
    function renderSongList(){
        songList.innerHTML = "";
        songs.forEach((song, index) => {
            const itemContainer = document.createElement("div");
             const thumbnailImg=document.createElement("img");
            const itemImg = document.createElement("div");
            const imgElement = document.createElement("img");
            const trackDataContainer = document.createElement("div");
            const trackTitle = document.createElement("p");
            const trackDescription = document.createElement("p");
            const trackDurationContainer = document.createElement("div");
            const trackDuration = document.createElement("p");
            const trackYear = document.createElement("p");
            itemContainer.classList.add("item-container");
            //leevel2 added classname
            thumbnailImg.classList.add("list-thumbnail");
            itemContainer.setAttribute("data-index", index);
            itemImg.classList.add("item-img");
            trackDataContainer.classList.add("track-data-container");
            trackTitle.classList.add("track-title");
            trackDescription.classList.add("track-artist");
            trackDurationContainer.classList.add("track-duration-container");
            trackDuration.classList.add("track-duration");
            trackYear.classList.add("track-year");
            // Click event to load and play selected song
            itemContainer.addEventListener("click", () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                audio.play();
                updatePlayPauseButton(true); 
            });
            imgElement.src = "icons/outline.svg";
            thumbnailImg.src=song.thumbnail;
            trackTitle.textContent = song.title;
            trackDescription.textContent = song.artist || "Unknown artist";
            trackDuration.textContent = song.duration;
            trackYear.textContent = song.year || "Unknown Year";
            itemImg.appendChild(imgElement);
            itemImg.appendChild(thumbnailImg);
            trackDataContainer.appendChild(trackTitle);
            trackDataContainer.appendChild(trackDescription);
            trackDurationContainer.appendChild(trackDuration);
            trackDurationContainer.appendChild(trackYear);
            itemContainer.appendChild(itemImg);
            itemContainer.appendChild(trackDataContainer);
            itemContainer.appendChild(trackDurationContainer);
            songList.appendChild(itemContainer);
        });

        updateCurrentSongHighlight(currentSongIndex);
    }
    // Function to shuffle the song list
    function shuffleSongs(songs){
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
    }
    renderSongList();
    //Modal JS
    // ACCESSING MODAL ELEMENTS
    const previewModal=document.getElementById("preview-modal");
    const closeModal=document.getElementById("close-modal");
    const previewImage=document.getElementById("preview-image");
    const previewDescription=document.getElementById("preview-description");
    const previewArtist=document.getElementById("preview-artist");
   // const followCount=document.getElementById("follow-count");
  //  const listnerCount=document.getElementById("listner-count");
    //function to open preview modal
    function openpreviewModal(){
        const currentTrack=songs[currentSongIndex];
        previewModal.style.display="flex";
        previewImage.src=currentTrack.thumbnail;
        previewArtist.innerText=currentTrack.artist;
       // followCount.innerText=currentTrack.followers;
       // listnerCount.innerText=currentTrack.monthlyListener;
        previewDescription.innerText=currentTrack.description;
        if(!currentTrack.isVerified){
            document.getElementById("verified").style.display="none";
        }
        else{
            document.getElementById("verified").style.display="flex";
        }
    }
closeModal.addEventListener("click",closePreviewModal);
    function closePreviewModal(){
        previewModal.style.display="none";
    }

window.addEventListener("click",function(event){
    if(event.target===previewModal){
        closePreviewModal();
    }
})

});
