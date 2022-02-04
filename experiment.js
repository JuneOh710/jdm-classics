jsPsych.init({
    fullscreen: true,
    on_finish: function (data) {
        // Serialize the data
        var promise = new Promise(function (resolve, reject) {
            var data = jsPsych.data.dataAsJSON();
            resolve(data);
        })

        promise.then(function (data) {
            sendResults(data);
        })
    }

});

async function sendResults(results) {
    function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    fetch("/save", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: results })
    })
        .then(handleErrors)
        .then(response => console.log("Request complete! response: ", response))
        .catch(error =>
            jsPsych.data.localSave('jdm_classics_results.csv', 'csv')
        );
}


const info = [];
const versionA = [];
const versionB = [];

// randomize order
const number = Math.round(Math.random());
// const order = [versionA, versionB];
const order = number ? [versionA, versionB] : [versionB, versionA];

const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Welcome to the experiment! In this task, we will be testing you ability to estimate the numerical answers of several questions.
             Press any key to continue on to the instructions.</p>
        `
}
info.push(welcome);

const instructions_1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>In this task, you will be estimating the answers to 9 questions. You will see one question at a time and your job is to
            make a reasonable guess as to what the answer is.</p><p> Each question requires a numerical response in the units that are specified.
            Once you have come up with an estimate, please type the number into the textbox provided and click "continue" to move on to the 
            next question.</p><p> Once again, just a reminder that you are NOT expected to know the exact answer to these questions. We only ask that
            you make a reasonable guess or give your best estimate.</p><p>When you are ready to begin, press any key.</p>
        `
}
info.push(instructions_1);


const question1A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Linda is 31 years old, single, outspoken and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.
Please rank the following five statements by their probability of being true. (1 = most probable, 5 = least probable)</p>`,
    html: `
<div id="container">
<div class="option">
    <label>Linda is active in the feminist movement.</label>
    <select name="Linda is active in the feminist movement." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Linda is a bank teller.</label>
    <select name="Linda is a bank teller." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Linda is a bank teller and is active in the feminist movement.</label>
    <select name="Linda is a bank teller and is active in the feminist movement." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Linda works in a bookstore and takes Yoga classes.</label>
    <select name="Linda works in a bookstore and takes Yoga classes." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Linda is an insurance salesperson.</label>
    <select name="Linda is an insurance salesperson." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

</div>

        `,
    autofocus: 'test-resp-box'
}

versionA.push(question1A);






const question2A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Consider the following hypothetical situation: A deck with 10 cards is randomly shuffled 10 separate times. The 10 cards are composed of 7 cards with the number “1” on the down side and 3 cards with the number “2” on the down side. Each time the 10 cards are reshuffled, your task is to predict the number on the down side of the top card. Imagine that you will receive $100 for each downside number you correctly predict, and that you want to earn as much money as possible.</p>`,
    html: `
        
        
        <div id="container">

<div class="option">
    <label>What would you predict after shuffle #1?</label>
    <select name="#1" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #2?</label>
    <select name="#2" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #3?</label>
    <select name="#3" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #4?</label>
    <select name="#4" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #5?</label>
    <select name="#5" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #6?</label>
    <select name="#6" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #7?</label>
    <select name="#7" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #8?</label>
    <select name="#8" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #9?</label>
    <select name="#9" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

<div class="option">
    <label>What would you predict after shuffle #10?</label>
    <select name="#10" required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
    </select>
</div>

</div>

        
        `,
    autofocus: 'test-resp-box'
}

versionA.push(question2A);



const question3A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Imagine that there will be a deadly flu going around your area next winter. Your doctor says that you have a 10% chance (10 out of 100) of dying from this flu. However, a new flu vaccine has
Linda is 31 years old, single, outspoken and very bright. She majored in philosophy. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.
Please rank the following five statements by their probability of being true. (1 = most probable, 5 = least probable)
8
been developed and tested. If taken, the vaccine prevents you from catching the deadly flu. However, there is one serious risk involved with taking this vaccine. The vaccine is made from a somewhat weaker type of flu virus, and there is a 5% (5 out of 100) risk of the vaccine causing you to die from the weaker type of flu. Imagine that this vaccine is completely covered by health insurance.</p>`,
    html: `
        
        <div class="option">
    <label>If you had to decide now, which would you choose?</label>
    <select name="choice" required>
        <option value="">--Please choose an option--</option>
        <option value="no vaccine">I should definitely not take the vaccine. I would thus accept the 10% chance of dying from this flu.</option>
        <option value="yes vaccine">I should definitely take the vaccine. I would thus accept the 5% chance of dying from the weaker flu in the vaccine.</option>
        <option value="do not know">I do not know.</option>
    </select>
</div>
        
        
        `,
    autofocus: 'test-resp-box'
}
versionA.push(question3A);


const question4A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>A panel of psychologists has interviewed and administered personality tests to a large population of engineers and lawyers, all successful in their respective fields. On the basis of this information, thumbnail descriptions of the engineers and lawyers have been written. The population consists of 10% engineers and 90% lawyers. Below is a description, chosen at random from the available descriptions.
Sam is a 30-year-old man. He is married with no children. A man of high ability and high motivation, he promises to be quite successful in his field. He is well-liked by his colleagues.
How likely is it that Sam is an engineer?</p>`,
    html: `  
        <div class="option">
    <label>Choose the option that you think is closest to the true probability.</label>
    <select name="probability" required>
        <option value="">--Please choose an option--</option>
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="95">95</option>
                <option value="100">100</option>
    </select>
</div>
`,
    autofocus: 'test-resp-box'
}
versionA.push(question4A);


const question5A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            
            Imagine that you are presented with three trays of black and white marbles. The marbles are spread in a single layer in each tray. You must draw out one marble (without peeking, of course) from a tray. If you draw a black marble you win $2.
<p>Tray 1 – 50 marbles</p>
<p>Tray 2 – 25 marbles</p>
<p>Tray 3 – 10 marbles</p>

The black marbles have been distributed in the 3 trays in the following way: 

<p>Tray 1 – 4 black marbles, 46 white marbles
</p>
<p>Tray 2 – 2 black marbles, 23 white marbles</p>

<p>Tray 3 – 1 black marble, 9 white marbles
</p>
            
            
            </p>`,
    html: `
        
        
        <div class="option">
    <label>Recall that if you draw a black marble you win $2. If you had to choose, what tray would you choose to draw from?</label>
    <select name="Tray" required>
        <option value="">--Please choose an option--</option>
                <option value="1">Tray 1</option>
                <option value="2">Tray 2</option>
                <option value="3">Tray 3</option>
    </select>
</div>
        
        `,
    autofocus: 'test-resp-box'
}
versionA.push(question5A);


const question6A = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            
            Imagine that you are a research chemist for a pharmaceutical company. You want to assess how well a certain experimental drug works to reduce obesity. In order to do so, you will study 100 laboratory rats that are obese. In your experiment, you will give some rats the drug and others a placebo, which is known to have no effect on obesity. After the experiment, there will be four types of rats:

                <p>1. Those who received the drug and whose obesity was reduced.
</p>
                <p>2. Those who received the drug and whose obesity was not reduced.
</p>
                <p>3. Those who did not receive the drug and whose obesity was reduced.
</p>
                <p>4. Those who did not receive the drug and whose obesity was not reduced.
</p>

            
            </p>`,
    html: `
        
        
        <div class="option">
    <label> Remember -- you want to assess how well a certain experimental drug works to reduce obesity. To evaluate the effectiveness of the drug, which of these types of rat do you need to observe?</label>
    <select name="observe" required>
        <option value="">--Please choose an option--</option>
                <option value="1">Just 1</option>
                <option value="1, 3">1 and 3</option>
                <option value="1, 2">1 and 2</option>
                <option value="1, 2, 3">1, 2, and 3</option>
                <option value="1, 2, 3, 4,">All of them</option>
    </select>
</div>
        
        `,
    autofocus: 'test-resp-box'
}
versionA.push(question6A);




//  =================== version B ===================




const question1B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>Bill is 34 years old. He is intelligent, but unimaginative, compulsive, and generally lifeless. In school, he was strong in mathematics but weak in social studies and humanities. Please rank the following five statements by their probability of being true. (1 = most probable, 5 = least probable)</p>`,
    html: `
        <div id="container">
<div class="option">
    <label>Bill is an accountant.</label>
    <select name="Bill is an accountant." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Bill plays jazz for a hobby.</label>
    <select name="Bill plays jazz for a hobby." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Bill is an accountant who plays jazz for a hobby.</label>
    <select name="Bill is an accountant who plays jazz for a hobby." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Bill surfs for a hobby.</label>
    <select name="Bill surfs for a hobby." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<div class="option">
    <label>Bill is an architect.</label>
    <select name="Bill is an architect." required>
        <option value="">--Please choose an option--</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

</div>

        
        
        `,
    autofocus: 'test-resp-box'
}

versionB.push(question1B);






const question2B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            A jar of marbles contains 20 marbles. Fourteen marbles are red and six are blue. You draw one marble at a time, record its color, and mix it back into the jar. Thus, there are always the same 20 marbles in the jar mixed in a new order. The jar is a solid material so you cannot see the color of the marble that you pick at random.
Your job is to guess the correct color each time you draw a marble. Imagine you draw 10 marbles one at a time (each time putting the one you draw back into the jar and mixing it).
What would your guesses be for each draw?
            </p>`,
    html: `
        
        <div id="container">

<div class="option">
    <label>Draw #1?</label>
    <select name="#1" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #2?</label>
    <select name="#2" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #3?</label>
    <select name="#3" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #4?</label>
    <select name="#4" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #5?</label>
    <select name="#5" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #6?</label>
    <select name="#6" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #7?</label>
    <select name="#7" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #8?</label>
    <select name="#8" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #9?</label>
    <select name="#9" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

<div class="option">
    <label>Draw #10?</label>
    <select name="#10" required>
        <option value="">--Please choose an option--</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
    </select>
</div>

</div>

        
        
        `,
    autofocus: 'test-resp-box'
}
versionB.push(question2B);




const question3B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            
            Imagine you are spending Sunday in the house with your dog. Your dog seems to be sick – she’s lethargic and won’t eat. You have pet insurance and you take the dog to your veterinarian. The vet diagnoses your dog with a bacterial infection and says that the infection has a 10% chance of killing her. The vet also says that there is an antibiotic available that is covered by your insurance that will cure the infection, but has one serious side effect: it causes a fatal heart attack in 5% of dogs who take the medicine.
            
            </p>`,
    html: `
        
        <div class="option">
    <label>If you had to decide now, which would you choose?</label>
    <select name="choice" required>
        <option value="">--Please choose an option--</option>
        <option value="no antibiotic">I should definitely not give my dog the antibiotic. I would thus accept the 10% chance of the dog dying from this infection.</option>
        <option value="yes antibiotic">I should definitely give my dog the antibiotic. I would thus accept the 5% chance of the dog dying from the antibiotic.</option>
        <option value="do not know">I do not know.</option>
    </select>
</div>
        
        
        `,
    autofocus: 'test-resp-box'
}
versionB.push(question3B);



const question4B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            
            A college dormitory has 90% of students who are majoring in the social sciences (e.g., psychology or economics) and 10% who are majoring in the humanities (e.g., history). You are reviewing short bios that different students have written as part of a graduation activity. You draw one bio at random. The bio reads:
“I am from a suburb of a major city. My high school had about 500 kids. I have a younger brother. I like hanging out with my friends and watching movies.”
How likely is it that this student is a humanities major?
            
            </p>`,
    html: `  
        <div class="option">
    <label>Choose the option that you think is closest to the true probability.</label>
    <select name="probability" required>
        <option value="">--Please choose an option--</option>
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
                <option value="60">60</option>
                <option value="65">65</option>
                <option value="70">70</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="85">85</option>
                <option value="90">90</option>
                <option value="95">95</option>
                <option value="100">100</option>
    </select>
</div>
`,
    autofocus: 'test-resp-box'
}
versionB.push(question4B);


const question5B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            Imagine that you are presented with three bowls of Halloween candy. Each bowl contains both your favorite and least favorite kind of candy.
            You must draw out one piece of candy (without peeking, of course) from a bowl.
<p>Bowl 1 – 100 pieces of candy</p>
<p>Bowl 2 – 50 pieces of candy</p>
<p>Bowl 3 – 10 pieces of candy</p>

Your favorite candy has been distributed in the 3 bowls in the following way:

<p>Bowl 1 – 12 of your favorite candy, 88 of your least favorite candy
</p>
<p>Bowl 2 – 6 of your favorite candy, 44 of your least favorite candy</p>

<p>Bowl 3 – 2 of your favorite candy, 8 of your least favorite candy
</p>
            
            
            </p>`,
    html: `
        
        
        <div class="option">
    <label>If you had to choose, what bowl would you choose to draw from?</label>
    <select name="Tray" required>
        <option value="">--Please choose an option--</option>
                <option value="1">Bowl 1</option>
                <option value="2">Bowl 2</option>
                <option value="3">Bowl 3</option>
    </select>
</div>
        
        `,
    autofocus: 'test-resp-box'
}
versionB.push(question5B);


const question6B = {
    type: jsPsychSurveyHtmlForm,
    preamble: `<p>
            
            Steve is a professional baseball player. Thirty percent of baseball games are played during the day. Seventy percent are played at night. Steve thinks he is a better hitter at night. He wants to test whether this is true. There are four kinds of data to look up.

                <p>1. How many hits he has in night games.
</p>
                <p>2. How many times he has batted in night games.
</p>
                <p>3. How many hits he has in day games.
</p>
                <p>4. How many times he has batted in day games.
</p>

            
            </p>`,
    html: `
        
        
        <div class="option">
    <label>Which kind of data does he need to know to test whether he is a better hitter at night?</label>
    <select name="observe" required>
        <option value="">--Please choose an option--</option>
                <option value="1">Just 1</option>
                <option value="1, 3">1 and 3</option>
                <option value="1, 2">1 and 2</option>
                <option value="1, 2, 3">1, 2, and 3</option>
                <option value="1, 2, 3, 4,">All of them</option>
    </select>
</div>
        
        `,
    autofocus: 'test-resp-box'
}
versionB.push(question6B);



const timeline = info.concat(order[0]);
jsPsych.run(timeline);
