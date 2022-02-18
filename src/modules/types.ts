interface Photos {
    [key: number]: Photo[];
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

export {Photos, Photo};
