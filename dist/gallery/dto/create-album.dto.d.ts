declare class PhotoDto {
    url: string;
    caption?: string;
}
export declare class CreateAlbumDto {
    albumName: string;
    photos: PhotoDto[];
}
export {};
