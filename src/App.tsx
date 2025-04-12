import styled from "styled-components";
import './App.css'

export default function App(){

    return (
        <Screen>
            <MainText>
                저는 즉흥적으로 행동해<br/>끝을 보는 개발자
            </MainText>
            {/*<MainText>*/}
            {/*    <PrimaryText>박찬규</PrimaryText>입니다.*/}
            {/*</MainText>*/}
            <CodeChan>Code.Chan</CodeChan>
            <LinkBar>
                <Link href={"https://www.instagram.com/chankyu_07/"}>instagram</Link>
                <Link href={"https://github.com/pck-llight"}>github</Link>
            </LinkBar>
            <ContactBar>
                <ContactText>contact</ContactText>
                <ContactText>to@codechan.dev</ContactText>
            </ContactBar>
        </Screen>
    )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100dvh;
    gap: 20px;
`
const MainText = styled.span`
    color: #EBEBEB;
    text-align: center;
    font-family: "UhBee MiMi";
    font-size: 53px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.59px;
`
const PrimaryText = styled(MainText)`
    color: #AA72FF;
    text-align: center;
    font-family: "UhBee MiMi";
    font-size: 53px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.59px;
`

const CodeChan =styled.span`
    color: #EBEBEB;
    font-family: SUIT;
    font-size: 48px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
`
const LinkBar = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
`

const Link = styled.a`
    color: #AA72FF;
    text-align: center;
    font-family: "UhBee DongKyung";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.42px;
    text-decoration: none;
`
const ContactBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
`

const ContactText = styled.span`
    color: #FFF;
    text-align: center;
    font-family: SUIT;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: -0.48px;
`
