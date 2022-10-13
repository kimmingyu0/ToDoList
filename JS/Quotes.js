const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const quotes = [
{
    quote : "도리에 맞는 말을 한다면 혹은 군자를 속일 수는 있을지 모른다. 그러나 도리에 벗어난 것으로 군자를 속일 수는 없을 것이다.",
    author : "공자 曰"
},
{
    quote : " 도(道)가 없는 나라에서 부하고 귀하게 되는 것은 사람으로서 수치스러운 일이다.",
    author : "공자 曰"
},
{
    quote : "가난한 자는 비굴하게 되기 쉽고 부자는 교만하기 쉽다. 가난해도 그 생을 즐기고 부자라도 예(禮), 즉 사람이 해야 할 도리를 존중해야 할 것이다.",
    author : "공자 曰"
},
{
    quote : "공자는 낚시로는 물고기를 잡으셨으나 그물은 쓰지 않았고, 주살로서 새집에서 자는 새는 쏘아 잡지 않으셨다. 공자의 제자가 한 말.",
    author : "공자 曰"
},
{
    quote : "국민의 앞장을 서서 국민을 위해 힘껏 노력한다. 이것이 위정자의 마음가짐이다.",
    author : "공자 曰"
},
{
    quote : "군자는 말은 느리고 능숙하지 못해도 실행은 민첩해야 한다.",
    author : "공자 曰"
},
{
    quote : "군자는 자기가 말한 것이 지나친 것을 부끄러워해야 한다. 실행하지 않는 말을 삼가고 말 이상으로 실천하도록 힘쓴다.",
    author : "공자 曰"
},
{
    quote : "덕이 있는 사람은 외롭지 않으며 반드시 이웃이 있다.",
    author : "공자 曰"
},
{
    quote : "친구를 사귀는 데 있어 충고가 잦으면 사이가 멀어지게 된다. 친절한 것도 너무 도가 지나치면 오히려 상대에게서 귀찮음을 당하게 된다.",
    author : "공자 曰"
},
{
    quote : "나는 다른 사람을 위해 생각해 주고 의논도 받아 준다. 그럴 때 나는 진정으로 성심성의껏 해 주고 있는가. 성의에 부족한 점은 없었는가. ",
    author : "공자 曰"
},
{
    quote : "알기만 하는사람은 좋아하는 사람만 못하고 좋아하는 사람은 즐기는사람만 못하다. ",
    author : "공자 曰"
},
{
    quote : "사치하면(호사스럽게 살면) 불손하기쉽고, 검소하면 고루해지니, 거만한것보다 차라리 고루한 것이났다.",
    author : "공자 曰"
},
{
    quote : "군자의 마음은 평탄하고 너그러우며, 소인의 마음은 항상 근심에 차 있다.",
    author : "공자 曰"
},
{
    quote : "그 직위에 있지 않거든 그 자리의 정사를 논하지 말라.",
    author : "공자 曰"
},
{
    quote : "말이라는 것은 꼭 그렇게 될 것이라고 확정적으로 예측할 수 없는 것이다.",
    author : "공자 曰"
}
]

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;