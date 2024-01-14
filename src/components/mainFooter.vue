<script setup>

</script>

<template>
    <div class="footer">
        <img class="logo" src="@/assets/images/HeaderLogo.png">
        <div class="numbCallsBlock d-flex">
            <h1 class="number ">3 899 391-84-49</h1>
            <button class="noneBtn orderCalls">Заказать звонок</button>
        </div>
        <div class="socIn d-flex flex-column">
            <div class="info d-flex mb-3">
                <img class="logo2" src="@/assets/images/HeaderLogo.png">
                <a href="#">Калорийность и состав</a>
                <a  href="#">Правовая информация</a>
            </div>
            <div>
                <span class="soc d-flex">Мы в соцсетях</span>
                <div class="socialRef">
                    <a href="#">YouTube</a>
                    <a href="#">Facebook</a>
                    <a href="#">Киев ул. Проспект</a>
                    <a href="#">Instagram</a>
                    <a href="#">ВКонтакте</a>
                    <a href="#">Вернадского 86В</a>
                </div>
            </div>
        </div>
        <div class="socIconBlock">
            <span class="ask d-flex mb-2">Остались вопросы? А мы всегда на связи:</span>
            <div class="socIconWrap">
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/Viber.png">
                </button>
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/skype.png">
                </button>
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/messenger.png">
                </button>
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/telegram.png">
                </button>
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/facebook.png">
                </button>
                <button class="noneBtn iconSoc">
                    <img src="@/assets/images/vk.png">
                </button>
                <button class="noneBtn sendBtn mt-1">
                    Написать нам
                </button>
            </div>
        </div>
        <span class="define">
            YaBao Все права защищены © 2021
        </span>
        <div class="d-flex gap-2 payBlock">
            <img src="@/assets/images/Visa.png" alt="">
            <img src="@/assets/images/MS.png" alt="">
            <img src="@/assets/images/PayPal.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.footer {
    display: grid;
    padding: 30px 0px 7px;
    row-gap: 20px;
    grid-template-areas:
    "logo numbCallsBlock "
    "socInBlock socInBlock"
    "socIconBlock socIconBlock"
    "define payBlock";
    grid-template-columns: 80px 1fr;
    align-items: center;
}
a{
    text-decoration: none;
}
.socialRef{
    width: 100%;
    margin-top: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: start;
    row-gap: 11px;
}
.socIconWrap{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
}
.define{
    font-size: 10px;
    font-weight: 600;
    grid-area: define;
    white-space: nowrap;
}
.sendBtn{
    grid-column: span 6;
    color: #0E0C0D;
    font-size: 13px;
    font-weight: 700;
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 2px solid #E3ECF5;
}
.iconSoc{
    width: 40px;
    height: 37.291px;
    border-radius: 6px;
    border: 2px solid #E3ECF5;
}
.iconSoc img{
    width: 20px;
    height: 20px;
}
.ask{
    color: #0E0C0D;
    font-size: 10px;
    font-weight: 700;
}
.soc{
    font-size: 12px;
    font-weight: 700;
}
.socialRef a{
    color: #0E0C0D;
    font-size: 10px;
    opacity: 0.7;
    white-space: nowrap;
}
.info a{
    color: #0E0C0D;
    font-size: 10px;
    font-weight: 700;
}
.info{
    gap: 50px;
    justify-content: space-between;
}
.number{
    text-align: end;
    color: #F7D22D;
    font-size: 21px;
    font-weight: 700;
    white-space: nowrap;
}
.orderCalls{
    align-self: end;
    width: 131px;
    height: 32px;
    border-radius: 28px;
    background: #F3F3F7;
    color: #696F7A;
    font-size: 10px;
    font-weight: 700;
    flex-shrink: 0;
}
.socIconBlock{
    grid-area: socIconBlock;
}
.socIn{
    grid-area: socInBlock;
}
.numbCallsBlock{
    grid-area: numbCallsBlock;
    flex-direction: column;
}
.logo{
    grid-area: logo;
    width: 72px;
    height: 50px;
}
.logo2 {
    display: none;
}
.payBlock{
    grid-area: payBlock;
    justify-self: end;
}
.payBlock img{
    width: 22.876px;
    height: 22.876px;
}

@media(min-width: 768px){
    .footer{
        padding: 50px 0 20px ;
        grid-template-areas:
        "socInBlock socInBlock"
        "socIconBlock socIconBlock"
        "numbCallsBlock payBlock"
        "define .";
    }
    .payBlock img{
        width: 45.514px;
        height: 45.514px;
    }
    .socIn{
        width: 65%;
        margin-left: auto;
        margin-right: auto;
    }
    .socIconWrap{
        align-items: baseline;
        display: flex;
        justify-content: space-between;
    }
    .iconSoc{
        flex-shrink: 0;
        width: 72px;
        height: 52px;
        border-radius: 13px;
        border: 2px solid #E3ECF5;
    }
    .iconSoc img{
        width: 30px;
        height: 30px;
    }
    .sendBtn{
        width: 216px;
        height: 52px;
        border-radius: 13px;
    }
    .numbCallsBlock{
        flex-direction: row;
        align-items: center;
        gap: 57px;
    }
    .info{
        justify-content: stretch;
        gap: 52px;
    }
    .info a{
        font-size: 16px;
    }
    .define{
        font-size: 14px;
        text-align: start;
    }
    .ask{
        font-size: 12px;
    }
    .soc{
        font-size: 16px;
    }
    .socialRef a{
        font-size: 16px;
    }
    .orderCalls{
        width: 180px;
        height: 42px;
        font-size: 14px;

    }
    .number{
        font-size: 30px;
    }
    .logo{
        display: none;
    }
    .logo2{
        display: block;
        position: absolute;
        left: 20px;
        width: 90px;
        height: 66.522px;
    }
}
@media(min-width: 1110px){
    .footer{
        padding: 55px 0 50px ;
        grid-template-areas:
        "logo . socIconBlock"
        "socInBlock socInBlock socIconBlock"
        "socInBlock socInBlock socIconBlock"
        "socInBlock socInBlock numbCallsBlock"
        "define payBlock numbCallsBlock";;
        grid-template-columns: 1fr 1fr 445px;
        align-items: center;
    }
    .socIconBlock{
        align-self:start;
    }
    .logo{
        display: block;
    }
    .logo2{
        display: none;
    }
    .iconSoc{
        width: 101px;
    }
    .socIconWrap{
        flex-wrap: wrap;
        row-gap: 14px;
    }
    .socIn{
        width: auto;
        margin: 0;
    }
    .numbCallsBlock{
        flex-direction: column;
        gap: 0px;
        align-items: start;
    }
    .orderCalls{
        align-self: start;
    }
    .payBlock{
        justify-self: center;
    }
    .ask{
        font-size: 14px;
    }
}
</style>