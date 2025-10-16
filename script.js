// Mood-based content database
const moodDatabase = {
    happy: {
        spotify: {
            playlists: [
                {
                    name: "Today's Top Hits",
                    description: "The most played songs right now",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                },
                {
                    name: "Happy Hits",
                    description: "Songs to make you smile and dance",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Happy Music Mix 2024",
                    description: "The best happy songs to brighten your day",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                },
                {
                    title: "Feel Good Music",
                    description: "Upbeat tracks to lift your spirits",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/9bZkp7q19f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    sad: {
        spotify: {
            playlists: [
                {
                    name: "Sad Songs",
                    description: "Beautiful melancholic tracks for reflection",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L8?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Sad Songs Playlist",
                    description: "Emotional songs for when you need to feel understood",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    chill: {
        spotify: {
            playlists: [
                {
                    name: "Chill Hits",
                    description: "Relaxing vibes for a peaceful moment",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Chill Music Mix",
                    description: "Relaxing beats for a calm atmosphere",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    angry: {
        spotify: {
            playlists: [
                {
                    name: "Rock Classics",
                    description: "Powerful rock songs to channel your energy",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcF6B6QPhFDv?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Rock Workout Mix",
                    description: "High-energy rock songs to release tension",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZZ5LpwO-An4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    excited: {
        spotify: {
            playlists: [
                {
                    name: "Party Hits",
                    description: "High-energy tracks to get you pumped up",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Party Music Mix",
                    description: "Energetic songs to celebrate and dance",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/3AtDnEC4zak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    romantic: {
        spotify: {
            playlists: [
                {
                    name: "Love Songs",
                    description: "Beautiful romantic tracks for special moments",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX50QitC6Oqtn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Romantic Music",
                    description: "Sweet love songs for intimate moments",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/4Tr0otuiQuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    nostalgic: {
        spotify: {
            playlists: [
                {
                    name: "Throwback Hits",
                    description: "Classic songs that bring back memories",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Nostalgic Music Mix",
                    description: "Songs that take you back in time",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    },
    energetic: {
        spotify: {
            playlists: [
                {
                    name: "Workout Hits",
                    description: "High-energy tracks to fuel your workout",
                    embed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
                }
            ]
        },
        youtube: {
            videos: [
                {
                    title: "Workout Music Mix",
                    description: "Energetic songs to power through your day",
                    embed: '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ZZ5LpwO-An4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                }
            ]
        }
    }
};

let selectedMood = null;
let selectedContentType = null;

// DOM elements
const moodButtons = document.querySelectorAll('.mood-btn');
const contentButtons = document.querySelectorAll('.content-btn');
const moodSelection = document.querySelector('.mood-selection');
const contentSelection = document.querySelector('.content-selection');
const results = document.querySelector('.results');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const resultEmbed = document.getElementById('result-embed');
const newSearchBtn = document.querySelector('.new-search-btn');

// Mood selection handlers
moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove previous selection
        moodButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Add selection to clicked button
        button.classList.add('selected');
        selectedMood = button.dataset.mood;
        
        // Show content selection after a short delay
        setTimeout(() => {
            moodSelection.style.display = 'none';
            contentSelection.style.display = 'block';
        }, 300);
    });
});

// Content type selection handlers
contentButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedContentType = button.dataset.type;
        showResults();
    });
});

// Show results based on mood and content type
function showResults() {
    contentSelection.style.display = 'none';
    results.style.display = 'block';
    
    const moodData = moodDatabase[selectedMood];
    const contentData = moodData[selectedContentType];
    
    // Get random item from the content
    const items = selectedContentType === 'spotify' ? contentData.playlists : contentData.videos;
    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    // Update result content
    resultTitle.textContent = randomItem.name || randomItem.title;
    resultDescription.textContent = randomItem.description;
    resultEmbed.innerHTML = randomItem.embed;
    
    // Scroll to results
    results.scrollIntoView({ behavior: 'smooth' });
}

// New search handler
newSearchBtn.addEventListener('click', () => {
    // Reset selections
    selectedMood = null;
    selectedContentType = null;
    
    // Reset UI
    moodButtons.forEach(btn => btn.classList.remove('selected'));
    results.style.display = 'none';
    contentSelection.style.display = 'none';
    moodSelection.style.display = 'block';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add some interactive animations
moodButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        if (!button.classList.contains('selected')) {
            button.style.transform = 'translateY(-3px) scale(1.02)';
        }
    });
    
    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('selected')) {
            button.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Add loading animation for content buttons
contentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const originalContent = button.innerHTML;
        button.innerHTML = '<span class="loading"></span> Finding your perfect match...';
        button.disabled = true;
        
        setTimeout(() => {
            showResults();
        }, 1000);
    });
});
