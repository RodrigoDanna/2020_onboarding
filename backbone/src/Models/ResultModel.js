define([
    'backbone'
], (Backbone) => {

    return Backbone.Model.extend({
        defaults: {
            id: 0,
            readable: false,
            title: 'title',
            title_short: 'title_short',
            title_version: 'title_version',
            link: 'link',
            duration: 0,
            rank:0,
            explicit_lyrics:false,
            explicit_content_lyrics:0,
            explicit_content_cover:0,
            preview: 'preview',
            md5_image: 'md5_image',
            artist:{
                id:0,
                name: 'name',
                link: 'link',
                picture: 'picture',
                picture_small: 'picture_small',
                picture_medium: 'picture_medium',
                picture_big: 'picture_big',
                picture_xl: 'picture_xl',
                tracklist: 'tracklist',
                type: 'type'
            },
            album:{
                id:0,
                title: 'title',
                cover: 'cover',
                cover_small: 'cover_small',
                cover_medium: 'cover_medium',
                cover_big: 'cover_big',
                cover_xl: 'cover_xl',
                md5_image: 'md5_image',
                tracklist: 'tracklist',
                type: 'type'
            },
            type: 'type'
        },
    })
    
})