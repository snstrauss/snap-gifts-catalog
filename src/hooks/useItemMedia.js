
export default function useItemMedia(item){
    const media = item && item.media.reduce((allMedia, curr) => {
        const { type } = curr;

        allMedia[type].push(curr);

        return allMedia;
    }, {
        video: [],
        image: []
    });

    return media;
}