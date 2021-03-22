export function getMediaIds(url) {
    return {
        data: [
            {
                id: "18144508183094671",
                caption: "Doggo"
            },
            {
                id: "17939570251465146",
                caption: "Trick question"
            },
            {
                id: "17866557608339368",
                caption: "Night king"
            },
            {
                id: "17913091363650379",
                caption: "Haha"
            },
            {
                id: "17892577657978064",
                caption: "Time well spent"
            }
        ],
        paging: {
            cursors: {
                before: "QVFIUkhvU3BzQkhDbzgzX0Y3TGhrRVVyWGFHT19EQVZALYjRkOVlxRW9fVHh2Vm94V2xHMTNqam9oekEzSzFza2xleFIzSTEtTmxZAQ1huM01OSnRvVGJ6ei1B",
                after: "QVFIUmZACMXhGVnRPLWhyNnZA0RTVmeWpKV1QyWDRJNU5ySGtoUmNqM3hZAdXF2MW42Mkp5X2lHcWt6OGJrcjZAPY0szWXl2Yl96SHJfRDN1ZA0RDbkQwNWU1eXln"
            }
        }
    }
}

export function getMediaInfo(url, id) {
    const mediaData = [{
        id: "18144508183094671",
        media_type: "IMAGE",
        media_url: "https://scontent.cdninstagram.com/v/t51.29350-15/162823724_536033307793625_4841497235293433743_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=7UNOjGN9-eEAX8PgFIx&_nc_ht=scontent.cdninstagram.com&oh=5eb13fa46843d7079862d6c683df3417&oe=607D5D55",
        username: "mayankupgrad",
        timestamp: "2021-03-21T20:31:58+0000"
    },
    {
        id: "17939570251465146",
        media_type: "VIDEO",
        media_url: "https://video.cdninstagram.com/v/t50.31694-16/162680474_1093599111119839_5623649288179989734_n.mp4?_nc_cat=111&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=D1k4REROCzIAX_tXBMD&_nc_ht=video.cdninstagram.com&oh=2cd0d5615dd5020b6abdf13e1df8bb90&oe=607B6059",
        username: "mayankupgrad",
        timestamp: "2021-03-21T20:30:20+0000"
    },
    {
        id: "17866557608339368",
        media_type: "IMAGE",
        media_url: "https://scontent.cdninstagram.com/v/t51.29350-15/162653760_336177747852443_4818677432684908093_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=8ZjaJAQprw0AX-7DaY_&_nc_ht=scontent.cdninstagram.com&oh=7d75032317f4004883abe6dd60c35e17&oe=607EABB4",
        username: "mayankupgrad",
        timestamp: "2021-03-21T20:29:32+0000"
    },
    {
        id: "17913091363650379",
        media_type: "VIDEO",
        media_url: "https://video.cdninstagram.com/v/t50.2886-16/161826788_2134097970057554_3437490649977339575_n.mp4?_nc_cat=111&vs=17891394919992058_3405818676&_nc_vs=HBkcFQAYJEdPUkhwUWxTMFd0bjg1UUhBTGNfb0phSWE3UXZia1lMQUFBRhUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvTu7NefiMg\u00252FFQIoAkMzLBc\u00252F\u00252BzMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB16gcA&ccb=1-3&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjQ4MC5mZWVkIn0\u00253D&_nc_ohc=t6Yzr9xJOy0AX_iXM5w&_nc_ht=video.cdninstagram.com&oh=b003fb9237ad207a5c8bd91cd0efe32f&oe=607D58E6&_nc_rid=7ec27e0187",
        username: "mayankupgrad",
        timestamp: "2021-03-21T20:28:31+0000"
    },
    {
        id: "17892577657978064",
        media_type: "IMAGE",
        media_url: "https://scontent.cdninstagram.com/v/t51.29350-15/162461140_349202669766237_3168345860999997805_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8ae9d6&_nc_ohc=3iQSIt4hrmoAX_DFaj9&_nc_ht=scontent.cdninstagram.com&oh=c0948337f8f60b8bbe666068cc3f6b63&oe=607E89AF",
        username: "mayankupgrad",
        timestamp: "2021-03-21T20:27:25+0000"
    }]

    return mediaData.find(item => item.id === id);
}

export function getUserProfile() {
    return {
        username: 'mayank.upgrad',
        full_name: 'Mayank Yadav',
        profile_picture: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic-300x300.png'
    }
}