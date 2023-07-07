import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "Học thuộc Hit chờ 'Born Pink' đến",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/b/5/2/ab520fed47628f9e2ed3edcc39f404cd.jpg",
        },
        {
            id: 2,
            name: "Nghe Taylor Swift và chốt đơn vé",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/1/2/2/81223cbf75f264622713c35258a80e7e.jpg",
        },
        {
            id: 3,
            name: "Hit mới nhất 'Đùa hơi quá' của Lê",
            thumbnailUrl:
                "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/6/2/8/4628a1f7125953ab199db90bfac93377.jpg",
        },
    ];
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
