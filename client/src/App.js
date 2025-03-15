import './App.css';
import KakaoMapEmbed from "./KakaoMapEmbed";
import {useEffect, useRef, useState} from "react";
import { FaArrowUp, FaArrowLeft, FaArrowRight, FaMobileAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";


function App() {
    const images = [
        `${process.env.PUBLIC_URL}/photo/봄1.jpg`,
        `${process.env.PUBLIC_URL}/photo/가을1.jpg`,
        `${process.env.PUBLIC_URL}/photo/겨울1.jpg`,
        `${process.env.PUBLIC_URL}/photo/메인사진.jpg`
    ];

    // currentIndex와 autoSlideInterval을 ref로 관리하여 리렌더링 문제 방지
    const currentIndex = useRef(0);
    const autoSlideInterval = useRef(null);
    const slideDuration = 3000; // 3초마다 자동 전환

    // 배경 이미지 업데이트 함수
    const updateBackground = () => {
        const headerImageElement = document.getElementById('headerImage');
        if (headerImageElement) {
            headerImageElement.style.backgroundImage = `url('${images[currentIndex.current]}')`;
        }
    };

    // 이미지 변경 함수
    const changeImage = (direction) => {
        if (direction === 'left') {
            currentIndex.current =
                currentIndex.current === 0 ? images.length - 1 : currentIndex.current - 1;
        } else if (direction === 'right') {
            currentIndex.current =
                currentIndex.current === images.length - 1 ? 0 : currentIndex.current + 1;
        }
        updateBackground();
        resetAutoSlide(); // 수동 클릭 시 자동 슬라이드 리셋
    };

    // 자동 슬라이드 시작
    const startAutoSlide = () => {
        autoSlideInterval.current = setInterval(() => {
            currentIndex.current =
                currentIndex.current === images.length - 1 ? 0 : currentIndex.current + 1;
            updateBackground();
        }, slideDuration);
    };

    // 자동 슬라이드 타이머 리셋
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval.current);
        startAutoSlide();
    };

    useEffect(() => {
        updateBackground();
        startAutoSlide();

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearInterval(autoSlideInterval.current);
    }, []);

    // 네비게이션 클릭 시 해당 섹션으로 스크롤 (섹션 중앙 정렬)
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "center"});
        }
    };

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // 스크롤 위치에 따라 상태 업데이트
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
                    <div>원오선원</div>
                    <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <FaBars size={24}/>
                    </div>

                    <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                        <li onClick={() => scrollToSection("intro")}>소개</li>
                        <li onClick={() => scrollToSection("notice")}>법회안내</li>
                        <li onClick={() => scrollToSection("contact")}>연락처</li>
                        <li onClick={() => scrollToSection("map")}>오시는길</li>
                    </ul>
                </div>
                <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li onClick={() => scrollToSection("intro")}>소개</li>
                        <li onClick={() => scrollToSection("notice")}>법회안내</li>
                        <li onClick={() => scrollToSection("contact")}>연락처</li>
                        <li onClick={() => scrollToSection("map")}>오시는길</li>
                    </ul>
                </div>
                <button
                    onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
                    className="scroll-to-top"
                >
                    <FaArrowUp color="white" size={24}/>
                </button>
            </header>
            <div className="main">
                <div className="header-image-container">
                    <button className="arrow left-arrow" onClick={() => changeImage('left')}>
                        <FaArrowLeft size={24}/>
                    </button>
                    <div className="header-image" id="headerImage"></div>
                    <button className="arrow right-arrow" onClick={() => changeImage('right')}>
                        <FaArrowRight size={24}/>
                    </button>
                </div>
                <section id="intro">
                    원오선원은 전통과 현대가 어우러진 마음의 안식처입니다.<br/>
                    평온한 분위기 속에서 삶의 여유를 찾고, 깊은 명상과 함께 정신적, 문화적 풍요를 누릴 수 있는 공간입니다.<br/>
                    자연의 아름다움과 고요함을 경험하며, 내면의 평화를 되찾을 수 있는 소중한 장소로 여러분을 초대합니다.
                </section>
                <section id="notice">
                    <div className="title">법회 안내</div>
                    <p>관 음 재 일</p>
                    <p>매월(음) 24일 오전 10시</p>
                </section>
                <section id="contact">
                    <div className="title">연락처</div>
                    <div>
                        <FaPhoneAlt size={30} color="#2c3e50"/>
                        <p>(031)872-4350</p>
                    </div>
                    <div>
                        <FaMobileAlt size={30} color="#2c3e50"/>
                        <p>010-6806-0765</p>
                    </div>
                </section>
                <section id="map">
                    <div className="title">오시는 길</div>
                    <p>경기도 의정부시 망월로 81 (호원동 223-25)</p>
                    <KakaoMapEmbed/>
                </section>
            </div>
            <footer>
                <h1>원오선원</h1>
                <ul>
                    <li>경기도 의정부시 망월로 81 (호원동 223-25)</li>
                    <li>(031)872-4350 / 010-6806-0765</li>
                    <li>하나은행 267-910230-30505 (예금주 : 선학원 원오선원)</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
