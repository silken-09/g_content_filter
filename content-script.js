function disablePointer() {
    let videoTitles = document.querySelectorAll("#video-title");
    let testRE = /(the|of|for|to)/i

    videoTitles.forEach(vt => {
        if (testRE.test(vt.innerHTML)) {
            vt.style.color = "pink";
    
            let contentDiv = vt.closest("#content");
            let contentDivDescendants = contentDiv.getElementsByTagName("*");
            
            for (let i = 0; i < contentDivDescendants.length; i++) {
                contentDivDescendants[i].style.pointerEvents = "none";
            }
        }
    })
}
disablePointer();

//if you type a certain word into the search bar, an alert will show...
    //maybe says to use tool
//or maybe if a certain word is typed into the search bar, the search button (and enter/return key) will be disabled


document.addEventListener("input", updateValue);

function updateValue(e) {
    let searchForm = document.querySelector("#search-form");
    let searchInputValue = document.querySelector("input#search").value;
    console.log(`input#search: ${searchInputValue}`);

    if (/barney/i.test(searchInputValue)) {
        searchForm.reset();     //this works
        alert("Use a tool");
    }

}







//PAGE MANAGER SOMETIMES CAUSES AN ERROR BECAUSE I THINK IT SAYS IT'S NOT A NODE. PROBABLY NOT LOADING SOON ENOUGH SOME TIMES. THE OG ONE WORKS AT LEAST SOMETIMES. THE QUERYSELECTORALL ONE WORKED WHEN I TRIED IT, BUT I HAVEN'T TESTED IT MUCH.

// const pageManager = document.querySelector("ytd-app #content #page-manager");
// // const pageManager = document.querySelectorAll("ytd-app #content #page-manager")[0];

// console.log(pageManager);
// console.log(typeof pageManager);

// let stopLength;
// let segmentTexts;
// const transcriptArr = [];
// let joinedTranscript;

// const transcriptConfig = {childList: true, subtree: true};

// const transcriptCallback = function(transcriptMutationList, transcriptObserver) {
//     segmentTexts = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer");
//         // console.log(segmentTexts);
//         //DON'T THINK I NEED SEGMENTTEXTS
        
//     stopLength = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").length;  //this is segmentTexts.length
//         console.log(stopLength);

//     document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").forEach(str => {transcriptArr.push(str.textContent)});

//     for (const mutation of transcriptMutationList) {
//         if (mutation.target.getAttribute("target-id") === "engagement-panel-searchable-transcript") {
//                 mutation.target.setAttribute("visibility", "ENGAGEMENT_PANEL_VISIBILITY_VISIBLE");
//         }
//     }

//     if (transcriptArr.length === stopLength && stopLength > 0) {
//         console.log(`transcriptArr.length: ${transcriptArr.length}, stopLength: ${stopLength}`);
//         console.log(transcriptArr);

//         joinedTranscript = transcriptArr.slice().join(' ');
//         console.log(joinedTranscript);

//         transcriptObserver.disconnect();
//     } 
// }

// const transcriptObserver = new MutationObserver(transcriptCallback);

// transcriptObserver.observe(pageManager, transcriptConfig);

// if (stopLength > 0) {
//     console.log(`stopLength is > 0: ${stopLength}`);
//     transcriptObserver.disconnect();
// }

// console.log('joinedTranscript');
// console.log(joinedTranscript);
// console.log('joinedTranscript');

//THINK YOU'LL WANT TO PUT ALL THIS INTO A FUNCTION SO THAT YOU CAN USE THE VALUE OUTSIDE OF THE FUNCTION




// function getTranscript() {
//     // const pageManager = document.querySelectorAll("ytd-app #content #page-manager")[0];
//     const pageManager = document.querySelector("ytd-app #content #page-manager");

//     let stopLength;
//     let segmentTexts;
//     const transcriptArr = [];
//     let joinedTranscript;

//     const transcriptConfig = {childList: true, subtree: true};

//     const transcriptCallback = function(transcriptMutationList, transcriptObserver) {
//         segmentTexts = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer");
//             //DON'T THINK I NEED SEGMENTTEXTS
            
//         stopLength = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").length;  //this is segmentTexts.length
    
//         document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").forEach(str => {transcriptArr.push(str.textContent)});
    
//         for (const mutation of transcriptMutationList) {
//             if (mutation.target.getAttribute("target-id") === "engagement-panel-searchable-transcript") {
//                     mutation.target.setAttribute("visibility", "ENGAGEMENT_PANEL_VISIBILITY_VISIBLE");
//             }
//         }
    
//         if (transcriptArr.length === stopLength && stopLength > 0) {
    
//             joinedTranscript = transcriptArr.slice().join(' ');
//             console.log(joinedTranscript);
    
//         } 
//     }

//     const transcriptObserver = new MutationObserver(transcriptCallback);

//     transcriptObserver.observe(pageManager, transcriptConfig);

//     if (stopLength > 0) {
//         transcriptObserver.disconnect();
//     }
// }
// getTranscript();








// function getTranscript() {
    // const pageManager = document.querySelectorAll("ytd-app #content #page-manager")[0];
    const pageManager = document.querySelector("ytd-app #content #page-manager");

    let stopLength;
    let segmentTexts;
    const transcriptArr = [];
    let joinedTranscript;
    
    let jt;

    const transcriptConfig = {childList: true, subtree: true};

    const transcriptCallback = function(transcriptMutationList, transcriptObserver) {
        segmentTexts = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer");
            //DON'T THINK I NEED SEGMENTTEXTS
            
        stopLength = document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").length;  //this is segmentTexts.length
    
        document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").forEach(str => {transcriptArr.push(str.textContent)});
    
        for (const mutation of transcriptMutationList) {
            if (mutation.target.getAttribute("target-id") === "engagement-panel-searchable-transcript") {
                    mutation.target.setAttribute("visibility", "ENGAGEMENT_PANEL_VISIBILITY_VISIBLE");
            }
        }
    
        if (transcriptArr.length === stopLength && stopLength > 0) {
            joinedTranscript = transcriptArr.slice().join(' ');
            console.log(joinedTranscript);
            console.log(/shortcuts/.test(joinedTranscript));
            
            if (/dailystoke.com/.test(joinedTranscript)) {
                // console.log(document.location);
                // console.log(window.location);
                document.querySelector("#movie_player > div.html5-video-container > video").pause();
                alert("Use a tool");
                window.location.assign("https://www.youtube.com/");

                //WONDER IF IT WOULD BE FASTER TO USE THE TRANSCRIPTARR FOREACH LOOP, BUT INSTEAD OF PUTTING THEM IN AN ARRAY AND THEN SEARCHING THE TEXT IN ITS ENTIRETY, I COULD JUST DO:
                   
                    // document.querySelectorAll("yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer").forEach(str => {
                    //     if (/dailystoke.com/.test(str.textContent)) {
                    //         console.log(str);
                    //         document.querySelector("#movie_player > div.html5-video-container > video").pause();
                    //         // alert("Use a tool");
                    //         window.location.assign("https://www.youtube.com/");
                    //         return;
                    //     }});
                    //THIS WORKS (STILL NEEDS TUNING UP), SO IT'S ANOTHER OPTION

                    //(OR MAYBE COULD USE FILTER/MAP)

            }
            return joinedTranscript;
        }
    }
    //the order of this stuff seems off a little maybe
        //don't know if it makes a difference having the for loop first

        //MAYBE NEED TO USE ANOTHER MUTATIONOBSERVER TO SEE WHEN JOINEDTRANSCRIPT HAS THE TRANSCRIPT
            //WHEN IT DOES, CAN MAYBE CREATE A NEW OBJECT AND GIVE IT THE VALUE OF JOINED TRANSCRIPT

    const transcriptObserver = new MutationObserver(transcriptCallback);

    transcriptObserver.observe(pageManager, transcriptConfig);

    if (stopLength > 0) {
        transcriptObserver.disconnect();
    }
    //dont know if you want to try to put this in the if statement above: (transcriptArr.length === ...)
    //actually may have tried that and it didnt work
    console.log(transcriptCallback);

// }
// getTranscript();

//HAVE TO GO TO SLEEP. YOU GOT THE TRANSCRIPT STRING (JOINEDTRANSCRIPT).
//FEEL DUMB, BUT CAN'T FIGURE OUT HOW TO GET THE VALUE OF JOINEDTRANSCRIPT OUTSIDE OF THE FUNCTION.
//PRETTY TIRED RIGHT NOW, SO HOPEFULLY I'LL REALIZE WHAT TO DO TOMORROW, BECAUSE IT FEELS LIKE IT SHOULD BE EASY/SOMETHING YOU KNOW HOW TO DO.
//AFTER YOU GET THE VALUE OUT OF THE FUNCTION, YOU'LL WANT TO MAYBE KIND OF DO WHAT YOU DID WITH THE DISABLE POINTER FUNCTION (I.E., USE REGULAR EXPRESSIONS)
    //IF THE TRANSCRIPT HAS ONE OF THE WORDS, DISABLE PLAYBACK (OR SOMETHING)
