export const reducerCases = {
    TOGGLE:'TOGGLE',
    ACTIVE_TAB:'ACTIVE_TAB',
    SET_LOADING:'SET_LOADING',
    SET_ITEMS:'SET_ITEMS',
    CHANGE_LOADING:'CHANGE_LOADING'
}

export const initialState = {
    id:null,
    counter:0,
    sideBar:true,
    activeTab:'new',
    loading:true,
    data:{
  "kind": "youtube#searchListResponse",
  "nextPageToken": "",
  "pageInfo": {
    "totalResults": 150,
    "resultsPerPage": 18
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "SlPhMPnQ58k"
      },
      "snippet": {
        "publishedAt": "2020-05-30T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Memories (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "VOin-sz64fs"
      },
      "snippet": {
        "publishedAt": "2024-05-29T00:00:00Z",
        "channelId": "UCE1R5sdacLnBbQBAY86sgTw",
        "title": "Demons - Imagine Dragons (Lyrics) || Lukas Graham, ZAYN, Sia (MixLyrics)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VOin-sz64fs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VOin-sz64fs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VOin-sz64fs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Matcha Lyrics ",
        "liveBroadcastContent": "none",
        "publishTime": "2024-05-29T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#playlist",
        "playlistId": "PLiA-8fV0cXuWgVfDBy_ldR_RSxJa0ju-H"
      },
      "snippet": {
        "publishedAt": null,
        "channelId": "UC2orz3mJHOnLncWGqOlk5xg",
        "title": "BEST SONGS 2023 - Hit Music 2023 Playlist",
        "description": null,
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/G7KNmW9a75Y/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/G7KNmW9a75Y/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/G7KNmW9a75Y/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Red Official · Playlist",
        "liveBroadcastContent": "none",
        "publishTime": null
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#playlist",
        "playlistId": "PLkqz3S84Tw-Sj1i3UYedWUjJr5-4_KW3a"
      },
      "snippet": {
        "publishedAt": null,
        "channelId": "UCPVhZsC2od1xjGhgEc2NEPQ",
        "title": "Hits Of The 2010s",
        "description": null,
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nfWlot6h_JM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nfWlot6h_JM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nfWlot6h_JM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Vevo Playlists · Playlist",
        "liveBroadcastContent": "none",
        "publishTime": null
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "BSzSn-PRdtI"
      },
      "snippet": {
        "publishedAt": "2021-05-30T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2021-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "vhgfdRRKTuQ"
      },
      "snippet": {
        "publishedAt": "2024-03-30T00:00:00Z",
        "channelId": "UC2FfTIgqCzCoZ1Gu2pfrb9Q",
        "title": "Best Pop Hits of the 2010s (Bruno Mars, Justin Bieber, Flo Rida, Maroon 5, Dj Snake, Jessie J..)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vhgfdRRKTuQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vhgfdRRKTuQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vhgfdRRKTuQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Albert CT",
        "liveBroadcastContent": "none",
        "publishTime": "2024-03-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "uuZE_IRwLNI"
      },
      "snippet": {
        "publishedAt": "2013-05-30T00:00:00Z",
        "channelId": "UC-y8ci7xfsu4L3zkSuHae0A",
        "title": "Justin Timberlake - Mirrors (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uuZE_IRwLNI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uuZE_IRwLNI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uuZE_IRwLNI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Justin Timberlake",
        "liveBroadcastContent": "none",
        "publishTime": "2013-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "MU8B4XDI3Uw"
      },
      "snippet": {
        "publishedAt": "2013-05-30T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Love Somebody",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/MU8B4XDI3Uw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/MU8B4XDI3Uw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/MU8B4XDI3Uw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2013-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "4uTNVumfm84"
      },
      "snippet": {
        "publishedAt": "2018-05-30T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Wait (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4uTNVumfm84/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4uTNVumfm84/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4uTNVumfm84/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "4NRXx6U8ABQ"
      },
      "snippet": {
        "publishedAt": "2020-05-30T00:00:00Z",
        "channelId": "UC0WP5P-ufpRfjbNrmOWwLBQ",
        "title": "The Weeknd - Blinding Lights (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "The Weeknd",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Icu0pYrInSU"
      },
      "snippet": {
        "publishedAt": "2024-04-30T00:00:00Z",
        "channelId": "UCDrkK0ZreAxieUpap59X5GA",
        "title": "Ed Sheeran, Dua Lipa, Adele, Maroon 5, Rihanna, Bruno Mars, The Weeknd - Billboard Top 50 This Week",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Icu0pYrInSU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Icu0pYrInSU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Icu0pYrInSU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Top Songs Music ",
        "liveBroadcastContent": "none",
        "publishTime": "2024-04-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "u3VTKvdAuIY"
      },
      "snippet": {
        "publishedAt": "2017-05-30T00:00:00Z",
        "channelId": "UCCFJeI-2sT_cWgz-QJRgbCw",
        "title": "Kygo, Selena Gomez - It Ain't Me (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u3VTKvdAuIY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u3VTKvdAuIY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u3VTKvdAuIY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Kygo",
        "liveBroadcastContent": "none",
        "publishTime": "2017-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "AoAm4om0wTs"
      },
      "snippet": {
        "publishedAt": "2020-05-30T00:00:00Z",
        "channelId": "UCNL1ZadSjHpjm4q9j2sVtOA",
        "title": "Lady Gaga, Ariana Grande - Rain On Me (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/AoAm4om0wTs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/AoAm4om0wTs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/AoAm4om0wTs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Lady Gaga",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "T3E9Wjbq44E"
      },
      "snippet": {
        "publishedAt": "2012-05-30T00:00:00Z",
        "channelId": "UClVrJwcIy7saPcGc1nct80A",
        "title": "Gym Class Heroes: Stereo Hearts ft. Adam Levine [OFFICIAL VIDEO]",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/T3E9Wjbq44E/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/T3E9Wjbq44E/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/T3E9Wjbq44E/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Fueled By Ramen",
        "liveBroadcastContent": "none",
        "publishTime": "2012-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "RQUuqbzQVsY"
      },
      "snippet": {
        "publishedAt": "2018-05-30T00:00:00Z",
        "channelId": "UCk1OAveiSUJjtQ8w4B_ayrA",
        "title": "Liam Payne, Rita Ora - For You (Fifty Shades Freed) (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RQUuqbzQVsY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RQUuqbzQVsY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RQUuqbzQVsY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "FiftyShadesVEVO",
        "liveBroadcastContent": "none",
        "publishTime": "2018-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "XatXy6ZhKZw"
      },
      "snippet": {
        "publishedAt": "2017-05-30T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Cold ft. Future (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/XatXy6ZhKZw/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/XatXy6ZhKZw/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/XatXy6ZhKZw/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2017-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "wXhTHyIgQ_U"
      },
      "snippet": {
        "publishedAt": "2020-05-30T00:00:00Z",
        "channelId": "UCeLHszkByNZtPKcaVXOCOQQ",
        "title": "Post Malone - Circles",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/wXhTHyIgQ_U/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Post Malone",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "zABLecsR5UE"
      },
      "snippet": {
        "publishedAt": "2020-05-30T00:00:00Z",
        "channelId": "UCveFkLdSOUsGwMJEgedO9dQ",
        "title": "Lewis Capaldi - Someone You Loved",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Lewis Capaldi",
        "liveBroadcastContent": "none",
        "publishTime": "2020-05-30T00:00:00Z"
      }
    }
  ]
}
    // data:null
}


export const reducer = (state,action)=>{
    switch (action.type){
        case reducerCases.SET_LOADING:{
            return{
                ...state,
                loading:!state.loading
            }
        }
        case reducerCases.CHANGE_LOADING:{
            return{
                ...state,
                loading:action.change
            }
        }
        case reducerCases.SET_ITEMS:{
            return{
                ...state,
                data:action.data
            }
        }
        case reducerCases.TOGGLE:{
            return {
                ...state,
                sideBar:!state.sideBar
            }
        }
        case reducerCases.ACTIVE_TAB:{
            return {
                ...state,
                activeTab:action.active
            }
        }
        default: return state
    }
}
