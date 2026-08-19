//  Dekho Hota kya hai ki mere Pass Html Hota hai Agr Mai Apne pure ke pure Html Ke Documnet ko 
//  Ek js ke object me convert kar du ya js ke object me Baad kar du toh us Pure Object ko ya pure Dabbe ko Bolte hi aDOM Called Documention Object 
// charcters > tags > token(by tokennizer) > Node > Dom   = Ye Process hia Pura Covert hone ka 
//  character mai jaise html ke Andar ji bhi <> eske Abdhar hota hai Usko Convert karte hia tags me conti .....


//  Esme Aab Haam Fetch Karne Wale Hia Kaise 
// agr mujeh maan lo Id Fetch karni hia toh Kaise karunga 
// 1- documnet.getElementID('us id Ka Name')
//    It is Called on Document object 
//    It return a single object 

//  Note agr mujhe multiple ID chaiye toh Wo KAise Ayenge 

//2- document.getElementbyClassName("class_name")

// 3- document.getElementbyTagName('like p')
//    ye apko sare p return kar dennga theek 

//  Keep In Mind
// 1- Get ElementsbyClassName or TagsName .  . > 
//     ye Both methode use Documnet object 
//     both return multiple items
//     the list returend is not an array 


//1-  querySelector('#Header')
//    Esme Kya Honga ki ki # Laga hua Hai Esse pahechan jayega ki Id hia Bhaiya Uska name Header hai 
//2-  querySelector('.Header')
//    Esme kya honga ki .(dot laga hua hai eska matlb hai ki bahiya . laga hua eska matlb class lani hai auska name Header hai theek hai na )
//3-  querySelector('Header')
//    Sidha Header Likha Laga hua Eska matlb bhaiya yaha toh na hi . hai na hi # hai Toh Kya karu eska matlb honga ki header name ka tags hai Usme Sabse Pahla tag jo haeder se hai usko leke ata hun mai 
//4-  querySelectorAll()
//    Ye haame Multiple element lake de denga done 
//    tum Eska class, id koi bhi ka use kar sakta hun same wahi karna hai bass All keyword ka usse kiya gaya hai 


//  Update Exiting Content 
//  Ab Mai yaha 4 propertes ki Baat karne wale hai 4
//  1- .innerHTML    Esme Yaha Se Mai HTML content ko  get/set kar paunga theek hai na 
//  2- .outerHTML
//  3- .textContext
//  4- .innerText

// 1- .innerHTML
// bass eske do kaam hai 
// Ye get Ka Kaam Tha 
// Ye apko ek elements return kara sakta hai 
// Ye Toh Ye apko Uske Sare ke sare decendet yani jo bhi hirrarche me hai uss node ke necche jitni bhi nodes a rahi hai wo sare ke sare return kar sakta hia 

//  Ye set ka Kam hai 
//  Ek html ke Content ko set kar sakta hai 


// Adding Element
//  createElement();
// Ex = createElement('span')
//  content.append()


















// DOM (Document Object Model)

// The DOM represents a document with a logical tree.
// It allows us to manipulate/change webpage content (HTML elements).



<body>
    <div>
        <h1>Todo</h1>
    </div>
    <ul>
        <li>Eat</li>
        <li>Code</li>
        <li>Sleep</li>
    </ul>
</body>



//(Document) se (body) ai Then Body se (Div and List) aye Then (Div se Se h1) aya Then Ul yani (unorder_list se Teen list ai ) Done


// tum consol me jake search karn kya 
// 1- window
// 2- document
// 3- console.dir(document);