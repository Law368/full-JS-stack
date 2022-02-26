interface Photos {
    [key: number]: Photo[];
}

interface State {
    _screen: string;
    screen: string;
    id: number | null;
    _id: number | null;
    _photos: Photos;
    photos: Photos;
}

// type Photos = Array<{
//     [key: number]: {
//         albumId: number;
//         id: number;
//         thumbnailUrl: string;
//         title: string;
//         url: string;
//     };
// }>

interface Photo {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
}

interface Albums {
    [key: number]: Album[];
}

interface Album {
    userId: number;
    id: number;
    title: string;
}

export {Albums, Album, Photos, Photo, State};
