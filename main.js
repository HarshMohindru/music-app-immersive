	
				 var currentSongNumber = 1;
			var willLoop = 0;
			var willShuffle = 0; 
	var willmute = 1; 
			
			
			
	//mute function//
	
			function mute(){
						var song=document.querySelector('audio');
				if (song.muted)
				{
					song.muted= false;
				}
				else
				{
					song.muted=true;
				}
			}
			
		
		
	
	
		//function for different sliders for different songs//
	function slide(next){
		
		if(next==songs[0]){
	$('body').vegas('destroy');

	$('.vegas-slider').vegas({
		
   slides:[
        { src: "images/01.jpg" },
        { src: "images/02.jpg" },
		{ src: "images/03.jpg" },
		{ src: "images/04.jpg" },
		{ src: "images/05.jpg" }
       
    ],
	animation: 'kenburns'
		
		
	});
	
	}
	else if(next ==songs[1]){
	 $('body').vegas('destroy');
		 
	
		
		$('.vegas-slider').vegas({
		
   slides:[
        { src: "images/07.jpg" },
        { src: "images/08.jpg" },
        { src: "images/09.jpg" },
        { src: "images/10.jpg" }
       
    ],
	animation: 'kenburns'
		
		
		
		
		
	});
	}
	


			else if(next == songs[2]){
				
				 $('body').vegas('destroy');
					 
					
					$('.vegas-slider').vegas({
					
			   slides:[
					{ src: "images/011.jpg" },
					{ src: "images/012.jpg" },
					{ src: "images/013.jpg" },
					{ src: "images/014.jpg" }
				  
				],
				animation: 'kenburns'
		
		
		
		
		
				});
				
				}	
				else if(next == songs[3]){
					$('body').vegas('destroy');
					
					
					$('.vegas-slider').vegas({
					
			   slides:[
					{ src: "images/015.jpg" },
					{ src: "images/016.jpg" },
					{ src: "images/017.jpg" },
					{ src: "images/018.jpg" },
					{ src: "images/019.jpg" }
					
					  ],
				animation: 'kenburns'
					
					
					
					
					
				});
				
				}
				else
				{
					$('body').vegas('destroy');
					$('.vegas-slider').vegas({
					
			   slides:[
					{ src: "images/01.jpg" },
					{ src: "images/02.jpg" },
					{ src: "images/04.jpg" },
					{ src: "images/05.jpg" },
					{ src: "images/06.jpg" }
				],
				animation: 'kenburns'
					
					
					
					
					
				});
				}
				
				}
				
				 
				 

	
	//
	
					
				function fancyTimeFormat(time)
				{   
					// Hours, minutes and seconds
					var hrs = ~~(time / 3600);
					var mins = ~~((time % 3600) / 60);
					var secs = time % 60;

					// Output like "1:01" or "4:03:59" or "123:03:59"
					var ret = "";

					if (hrs > 0) {
						ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
					}

					ret += "" + mins + ":" + (secs < 10 ? "0" : "");
					ret += "" + secs;
					return ret;
				}
				
				
	//function for current and duration time of song//			
				
				 function changeCurrentSongDetails(songObj) {
					$('.current-song-image').attr('src','images/' + songObj.image)
					$('.current-song-name').text(songObj.name)
					$('.current-song-album').text(songObj.album)
				}

    //volume function//


				function setvolume(){
					var song = document.querySelector('audio');
					song.volume = slider.value/100;
					
                }
    //unction for play and pause//
	
			function toggleSong() {
			var song = document.querySelector('audio');
			if(song.paused == true) { // if song is in pause mode then play the song
			console.log('Playing');
			$('.play-icon').removeClass('fa-play').addClass('fa-pause');
			song.play();
			$('body').vegas('play');
			}
			else {
			console.log('Pausing'); //otherwise pause the song
			$('.play-icon').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			$('body').vegas('pause');
			}
			} 
			
			
		
	//function for change time in minutes//		
			
			function updateCurrentTime() {
			var song = document.querySelector('audio');
			var currentTime = Math.floor(song.currentTime);
			currentTime = fancyTimeFormat(currentTime);
			var duration = Math.floor(song.duration);
			duration = fancyTimeFormat(duration)
			$('.time-elapsed').text(currentTime);
			$('.song-duration').text(duration);
		}
		
	 //function for fill progress bar//	
		function updateTimer() {
			var song = document.querySelector('audio');
			var ct = song.currentTime;
			var td = song.duration;
			var percentage =(ct/td)*100;
			$('.progress-filled').css('width', percentage+ "%");
			
		}
		
		
	//function for song play when click//	
			
			function addSongNameClickEvent(songObj,position) {
				var songName = songObj.fileName;
				var id = '#song' + position;
				$(id).click(function() {
				var audio = document.querySelector('audio');
				var currentSong = audio.src;
				if(currentSong.search(songName) != -1)
				{
				toggleSong();
					
                 
				}
				else {
				audio.src = songName;
				toggleSong();
				
				changeCurrentSongDetails(songObj); 
				}
				});
				}
								
				
	            //playlist//	

				
			var songs = [{
			
				'name': 'Smoke And Mirrors',
				'artist': 'Imagine Dragons',
				'album': 'Smoke + Mirrors',
				'duration': '4:20',
				'fileName': 'song1.mp3',
				'image': 'smokemirrors.png'
			},
			{
				'name': 'Battle Cry',
				'artist': 'Imagine Dragons',
				'album': 'Smoke + Mirrors',
				'duration': '4:34',
			   'fileName': 'song2.mp3',
			   'image': 'img02.jpg'
				
			},
			{
				'name': 'Monster',
				'artist': 'Imagine Dragons',
				'album': 'Smoke + Mirrors',
				'duration': '4:10',
			   'fileName': 'song3.mp3',
			   'image': 'img03.jpg'
				
			},
			{
			    'name': 'Dream',
				'artist': 'Imagine Dragons',
				'album': 'Smoke + Mirrors',
				'duration': '4:19',
			   'fileName': 'song4.mp3',
			   'image': 'img04.jpeg'
			}]
			
				
			
	// function for ending the song//

	
		function timeJump(){
		var song =document.querySelector('audio')
		song.currentTime = song.duration-5;
	    }
	 
	//function for shuffle//	  
		  
		 $('audio').on('ended',function() {
			   
				var audio = document.querySelector('audio');
					if (willShuffle == 1) {
						
						var nextSongNumber = randomExcluded(1,6,currentSongNumber); // Calling our function from Stackoverflow
						var nextSongObj = songs[nextSongNumber-1];
						 
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
					     slide(nextSongObj);
						currentSongNumber = nextSongNumber;
						
					}
					else if(currentSongNumber < 7) {
						
						var nextSongObj = songs[currentSongNumber];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						slide(nextSongObj);
						currentSongNumber = currentSongNumber + 1;
					}
					else if(willLoop == 1) {
					
						
						var nextSongObj = songs[0];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						currentSongNumber =  1;
						slide(nextSongObj);
					}
					else {
						slide(nextSongObj);
						$('.play-icon').removeClass('fa-pause').addClass('fa-play');
						audio.currentTime = 0;
					}
				})
				
				
				
				function randomExcluded(min,max,excluded){
				var n =Math.floor(Math.random()*(max-min)+min);
                if	(n>=excluded)n++;
                return n;				
					
				}
				
				

				
				
	//welcome screen//			
							
  	        window.onload = function() {
			
			changeCurrentSongDetails(songs[0]);
			
			updateCurrentTime(); 
			setInterval(function() {
			updateCurrentTime();
			updateTimer();
			},1000);
		
		
		
		  // var songList = ['Shape Of You','Daspacito', ' Ye Hai Aashiqui ', 'Waka Waka', 'Mahi Ve', 'Khaab']; 
		  //var fileNames = ['song5.mp3','song2.mp3','song3.mp3','song4.mp3','song6.mp3','song7.mp3'];
			
		  //var artistList = ['Ed Sheeran', 'Luis Fonsi','Abhishek Arora', 'Dev Negi','Badshah', 'Jubin Nautiyal', 'Neha Kakkar','Akhil']; 
	
	      //var albumList = ['Divide','Despacito & Mis Grandes Éxitos','Ye Hai Aashiqui','ale el Sol','Wajah Tum Ho','Khaab'];
          //  var durationList = ['3:54','3:49','3:33','3:05','6:02','3:22'];
		  
		    
	
			 for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
	
		
		}
				
			//addSongNameClickEvent(fileNames[0],1);
			//addSongNameClickEvent(fileNames[1],2);
			//addSongNameClickEvent(fileNames[2],3);
			//addSongNameClickEvent(fileNames[3],4);
			//addSongNameClickEvent(fileNames[4],5);
			//addSongNameClickEvent(fileNames[5],6);
            //addSongNameClickEvent(fileNames[6],7);				
		
     		//for (var i = 0; i < fileNames.length ; i++) {
			//addSongNameClickEvent(fileNames[i],i+1)
			//	} 
		
				
				$('#songs').DataTable({
				
					"paging": false
			});
			}	   
					   
					   

			//jquery ko bola class ko select kro or jb uspr click ho to code run kre
			
			
			$('.welcome-screen button').on('click', function() { //$ is used  in place of var button = document.querySelecttor and 
				var name = $('#name-input').val();               // name-input ki jo id hai uski jo value hai usko print krao
				if (name.length > 3) {                          //name ki jo length hai agr greater than 2 hai to code run krega
					var message = "Welcome, " + name;
					$('.main .user-name').text(message);        //jquery ko bolo main class mai h1 ko dhunde or usme text add kr de jo msg box mai hai
					$('.welcome-screen').addClass('hidden');    //jquery ko bola wecome-screen class mai hidden class ko add kr do
					$('.main').removeClass('hidden');  
					
					
					
			   $('.vegas-slider').vegas({
		
			   slides:[
					{ src: "images/01.jpg" },
					{ src: "images/02.jpg" },
					{ src: "images/04.jpg" },
					{ src: "images/05.jpg" },
					{ src: "images/06.jpg" }
				],
				animation: 'kenburns'
					
					
					
					
					
				});
					//then remove hidden class in main class
				} else {
					var error='type name more than three letters';
					$('#name-input').addClass('error');
					$('.error-message').removeClass('hidden').text(error);
				}
			});
			
			
	
				$('.play-icon').on('click', function() {
					 toggleSong();
				});
	
	
			
						
				$('body').on('keypress',function(event) {
					console.log(event);
					var target = event.target;
					if (event.keyCode == 32 && target.tagName !='INPUT')
					{
						toggleSong();
					}
				});
						
							
			$('.fa-volume-up').on('click',function() {
			$('.fa-volume-up').toggleClass('disabled')
			willmute = 1 - willmute;
			
			mute();
            });
					
					
				
			$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled')
			willShuffle = 1 - willShuffle;
            });
			
			$('.fa-repeat').on('click',function() {
				$('.fa-repeat').toggleClass('disabled')
				willLoop = 1 - willLoop;
			});
			
		
			$('#slider').on('mousemove',function(){
				setvolume();
			});


			
			
			$('#song1').on('click',function(){
				
			slide(songs[0]);

			});


			$('#song2').on('click',function(){
				
			 slide(songs[1]);
					 
					
			});

			$('#song3').on('click',function(){
			 
			 slide(songs[2]);
			});



			$('#song4').on('click',function(){
				slide(songs[3]);
			  
			});



			$('#song5').on('click',function(){
				slide(songs[4]);
			  
			});



			$('#song6').on('click',function(){
			slide(songs[5]);
			 
			});













