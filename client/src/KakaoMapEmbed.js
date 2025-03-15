import React from "react";

const KakaoMapEmbed = () => {
    return (
        <div
            style={{
                font: "normal normal 400 12px/normal dotum, sans-serif",
                width: "100%",
                // height: "auto",
                color: "#333",
                position: "relative",
                margin: "0 auto"
            }}
        >
            <div style={{ height: "80%" }}>
                <a
                    href="https://map.kakao.com/?urlX=510016.0&urlY=1167499.0&itemId=12823202&q=%EC%9B%90%EC%98%A4%EC%84%A0%EC%9B%90&srcid=12823202&map_type=TYPE_MAP&from=roughmap"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        className="map"
                        src="https://t1.daumcdn.net/roughmap/imgmap/9fced535abeddda37de04a0adf2e5f6dc0b8e7d34f682c5446ad9c85258bcc6d"
                        width="100%"
                        // height="358px"
                        style={{ border: "1px solid #ccc" }}
                        alt="카카오 지도"
                    />
                </a>
            </div>

            <div
                style={{
                    overflow: "hidden",
                    padding: "7px 11px",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    borderRadius: "0px 0px 2px 2px",
                    backgroundColor: "rgb(249, 249, 249)",
                }}
            >
                <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ float: "left" }}
                >
                    <img
                        src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                        width="72"
                        height="16"
                        alt="카카오맵"
                        style={{ display: "block", width: "72px", height: "16px" }}
                    />
                </a>

                <div
                    style={{
                        float: "right",
                        position: "relative",
                        top: "1px",
                        fontSize: "11px",
                    }}
                >
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://map.kakao.com/?from=roughmap&srcid=12823202&confirmid=12823202&q=%EC%9B%90%EC%98%A4%EC%84%A0%EC%9B%90&rv=on"
                        style={{
                            float: "left",
                            height: "15px",
                            paddingTop: "1px",
                            lineHeight: "15px",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        로드뷰
                    </a>

                    <span
                        style={{
                            width: "1px",
                            padding: "0",
                            margin: "0 8px 0 9px",
                            height: "11px",
                            verticalAlign: "top",
                            position: "relative",
                            top: "2px",
                            borderLeft: "1px solid #d0d0d0",
                            float: "left",
                        }}
                    ></span>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://map.kakao.com/?from=roughmap&eName=%EC%9B%90%EC%98%A4%EC%84%A0%EC%9B%90&eX=510016.0&eY=1167499.0"
                        style={{
                            float: "left",
                            height: "15px",
                            paddingTop: "1px",
                            lineHeight: "15px",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        길찾기
                    </a>

                    <span
                        style={{
                            width: "1px",
                            padding: "0",
                            margin: "0 8px 0 9px",
                            height: "11px",
                            verticalAlign: "top",
                            position: "relative",
                            top: "2px",
                            borderLeft: "1px solid #d0d0d0",
                            float: "left",
                        }}
                    ></span>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=12823202&itemId=12823202&q=%EC%9B%90%EC%98%A4%EC%84%A0%EC%9B%90&urlX=510016.0&urlY=1167499.0"
                        style={{
                            float: "left",
                            height: "15px",
                            paddingTop: "1px",
                            lineHeight: "15px",
                            color: "#000",
                            textDecoration: "none",
                        }}
                    >
                        지도 크게 보기
                    </a>
                </div>
            </div>
        </div>
    );
};

export default KakaoMapEmbed;
