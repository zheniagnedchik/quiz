import React,{Component} from 'react'
import Question from './question/Question'
import Answer from './answer/Answer'
import WarningBanner from './TitleTimer'

import './QuizMain.css'
import HeaderTitle from './HeaderTitle'
import StatusBar from './StatusBar'
import CloseTest from './CloseTest'
import BattonNextQuestion from './BattonNextQuestion'
import OutTest from './OutTest'
import BackToQuestion from './BackToQuestion'
import CorrectTest from './CorrectTest'
import StatusBarCorrect from './StatusBarCorrect'


export default class Quiz extends Component {
   
    constructor (props){
        super(props);
        
        const rand = (min,max)=>Math.floor(Math.random()*max) + min
        this.state = {
            questions:[
                {   id:1,
                    title:"На что из указанного в вариантах ответа имеет право работающий?",
                    answer:
                        {
                        1:["На рабочее место, соответствующее требованиям по охране труда."],
                        2:["На обучение безопасным методам и приемам работы, проведение инструктажа по вопросам охраны труда."],
                       
                        3:["- На обучение безопасным методам и приемам работы, проведение инструктажа по вопросам охраны труда. На рабочее место, соответствующее требованиям по охране труда.На обеспечение необходимыми средствами индивидуальной защиты, средствами коллективной защиты, санитарно-бытовыми помещениями, оснащенными необходимыми устройствами и средствами."]
                        }
                    
                },
                {   id:2,
                    title:"В каком из указанных ниже случаев работающий имеет право отказаться от выполнения порученной работы?",
                    answer:
                        {
                        1:["В случае, если работа ему не нравится."],
                        2:["В случае, если эта работа низкооплачиваемая"],
                       
                        3:[".В случае возникновения непосредственной опасности для жизни и здоровья его и окружающих до устранения этой опасности."]
                        }
                    
                },
                {   id:3,
                    title:"Имеет ли право работник приступать к работе, в состоянии, связанном с болезнью, препятствующем выполнению работ?",
                    answer:
                        {
                        1:"Имеет.",
                        2:"Имеет, если считает, что может выполнять работу.",
                       
                        3:"Не имеет."
                        }
                    
                },
                {   id:4,
                    title:"Кого работник обязан немедленно известить о неисправности оборудования, инструмента, приспособлений, транспортных средств,  средств защиты?",
                    answer:
                        {
                        1:"Руководителя организации.",
                        2:"Главного инженера.",
                       
                        3:"Своего непосредственного руководителя или иное уполномоченное должностное лицо нанимателя."
                        }
                    
                },
                {   id:5,
                    title:"Кого работник обязан немедленно известить об ухудшении состояния своего здоровья?",
                    answer:
                        {
                        1:"Руководителя организации",
                        2:"Главного инженера",
                       
                        3:"Своего непосредственного руководителя или иное уполномоченное должностное лицо нанимателя."
                        }
                    
                },
                {   id:6,
                    title:"При выполнении работ на оборудовании работник должен:",
                    answer:
                        {
                        1:"Отвлекаться на посторонние дела, отвлекать других работников, быть не внимательным.",
                        2:"Оставлять свое рабочее место без присмотра во время работы станка.",
                       
                        3:"Быть внимательным, не отвлекаться от работы и не отвлекать других работников. Не оставлять свое рабочее место без присмотра."
                        }
                    
                },
                {   id:7,
                    title:"Имеет ли право работодатель направить на освидетельствование работника на предмет нахождения в состоянии опьянения, если работник не включен  в Перечень  работ (профессий), при выполнении которых данное освидетельствование требуется?",
                    answer:
                        {
                        1:"Имеет.",
                        2:"Не имеет.",
                       
                        3:"Имеет, в случаях, когда в отношении работающего имеются достаточные основания полагать, что он находятся в состоянии алкогольного,наркотического или токсического опьянения."
                        }
                    
                },
                {   id:8,
                    title:"С какой максимальной скоростью разрешается двигаться механическим транспортным средствам в производственных помещениях, если приказом руководителя организации не установлены иные ограничения?",
                    answer:
                        {
                        1:"3 км/ч.",
                        2:"10 км/ч.",
                       
                        3:"5 км/ч."
                        }
                    
                },
                {   id:9,
                    title:"Имеет ли право работник выполнять работу на оборудовании с неисправными защитными ограждениями, сигнальными и блокирующими устройствами?",
                    answer:
                        {
                        1:"Имеет.",
                        2:"Имеет, если это, по мнению работника, является безопасным",
                       
                        3:"Не имеет"
                        }
                    
                },
                {   id:10,
                    title:"Допускается ли использовать санитарно-бытовые помещения организации не по назначению?",
                    answer:
                        {
                        1:"Допускается, если это необходимо для производственных целей.",
                        2:"Допускается при ликвидации аварий.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:11,
                    title:"Допускается ли курить на рабочем месте?",
                    answer:
                        {
                        1:"Допускается.",
                        2:"Допускается, если это разрешил непосредственный руководитель.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:12,
                    title:"Где работающим разрешается осуществлять прием пищи?",
                    answer:
                        {
                        1:"На рабочем месте.",
                        2:"В гардеробе.",
                       
                        3:"В специально отведенных для этого помещениях, оборудованных в соответствии с требованиями технических нормативных правовых актов."
                        }
                    
                },
                {   id:13,
                    title:"Какое требование предъявляется к блокировке легкосъемных защитных ограждений подвижных частей производственного оборудования с электроприводом?",
                    answer:
                        {
                        1:"При открывании ограждения ничего не происходит",
                        2:"Никаких требований не предъявляется.",
                       
                        3:"При открывании ограждения должен останавливаться привод и исключаться его пуск."
                        }
                    
                },
                {   id:14,
                    title:"Какие действия необходимо предпринять работнику при обнаружении пожара?",
                    answer:
                        {
                        1:"Сообщить своему непосредственному руководителю, а в его отсутствие - вышестоящему руководителю.",
                        2:"Принять возможные меры по тушению пожара имеющимися первичными средствами пожаротушения",
                       
                        3:"Немедленно сообщить по телефонам 101 или 112 или непосредственно в пожарное аварийно-спасательное подразделение адрес и место пожара. - Принять меры по оповещению людей и их эвакуации.- Принять возможные меры по тушению пожара имеющимися первичнымисредствами пожаротушения."
                        }
                    
                },
                {   id:15,
                    title:"Допускаются ли к эксплуатации теплогенерирующие аппараты и отопительные приборы (кроме теплоемких печей) не заводского изготовления?",
                    answer:
                        {
                        1:"Допускаются.",
                        2:"Допускаются, если они выглядят безопасно.",
                       
                        3:"Не допускаются."
                        }
                    
                },
                {   id:16,
                    title:"Допускается ли нахождение на территории организации в состоянии, вызванной употреблением алкогольных напитков, наркотических и (или) токсических препаратов?",
                    answer:
                        {
                        1:"Допускается.",
                        2:"Допускается, в нерабочее время.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:17,
                    title:"Допускается ли выполнение работ на неисправном оборудовании, неисправным инструментом?",
                    answer:
                        {
                        1:"Допускается.",
                        2:"Допускается, если, по мнению работника, это безопасно.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:18,
                    title:"Допускается ли выполнение работ без применения специальной одежды, специальной обуви и других средств индивидуальной защиты?",
                    answer:
                        {
                        1:"Допускается.",
                        2:"Допускается, если это разрешил непосредственный руководитель.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:19,
                    title:"Допускается ли выполнять указания руководителя (мастера, начальника участка), если они противоречат требованиям безопасности и могут повлечь угрозу жизни и здоровью работника и (или) окружающих?",
                    answer:
                        {
                        1:"Допукается.",
                        2:"Допускается, т.к. работник должен выполнять указания своего руководителя.",
                       
                        3:"Не допускается."
                        }
                    
                },
                {   id:20,
                    title:"Имеет ли право работник выполнять работу на незнакомом ему оборудовании?",
                    answer:
                        {
                        1:"Имеет.",
                        2:"Имеет, если эту работу ему поручил его руководитель.",
                       
                        3:"Не имеет."
                        }
                    
                },
                {   id:21,
                    title:"Имеет ли право работник передавать свое оборудование, инструмент, приспособления другому работнику?",
                    answer:
                        {
                        1:"Имеет, если он уверен, что другой работник знает, как выполнять эту работу.",
                        2:"Имеет, если работнику нужно срочно отлучиться.",
                       
                        3:"Не имеет."
                        }
                    
                },
                {   id:22,
                    title:"Можно ли складировать на производственное оборудование детали, заготовки, инструмент?",
                    answer:
                {
                        1:"Можно.",
                        2:"Можно, если это необходимо для выполнения производственного задания.",
                       
                        3:"Делали и заготовки необходимо складировать в специальной производственной таре, а инструмент на специальных инструментальных тумбочках."
                }  
                    
                },
                {   id:23,
                    title:"Убору, чистку, смазку, наладку производственного оборудования необходимо производить:",
                    answer:
                        {
                        1:"В любое свободное время.",
                        2:"При работающем оборудовании.",
                       
                        3:"При отключенном оборудовании, дождавшись полной остановки всех вращающихся элементов."
                        }
                    
                },
                
                
        
                
                
            ],
            correctAnswers:{
                1:'3',
                2: '3',
                3: '3',
                4: '3',
                5: '3',
                6: '3',
                7: '3',
                8: '3',
                9: '3',
                10: '3',
                11: '3',
                12: '3',
                13: '3',
                14: '3',
                15: '3',
                16: '3',
                17: '3',
                18: '3',
                19: '3',
                20: '3',
                21: '3',
                22: '3',
                23: '3',
              

    
            },
            correctAnswer: 0,
            step:rand(1,22),
            clickAnswer : 0,
            min : 0,
            max : 23,
            score : 0,
            nextChek: false,
            checked: true,
            checkb: false,
            timeLeft:null,
            timer:null,
            numberQuestion:1,
            number:1,
            time:"20",
            showWarning: false,
            
            answerFalse:0,
            statusBar:true,
            closeTest: false,
            buttonNextQuestion:true,
            backQuestion:false,
            buttonOut:false,
            correctTest:false,
            animNextQestion_2:false,
            animNextQestion_3:false,
            statusBarCorrect:false,
            reverse:false
            
        }
    }
 
    
    
    render(){
        this.testClick =()=>{
            this.setState({
                testClass:true,
                testClasst:true
            })
        }
        let step = this.state.step
        
        let questionAll = this.state.questions[step]
        let question = questionAll.title
        let answer = questionAll.answer
        let {correctAnswer,clickAnswer,answerFalse} = this.state
        
            
        
        
       
        this.chekAnswer = answer =>{
            const {correctAnswers,score,numberQuestion }=this.state
            if(answer===correctAnswers[questionAll.id]){
                this.setState({
                    score: score+1,
                    correctAnswer:correctAnswers[questionAll.id],
                    clickAnswer :answer,
                    nextChek:true,
                    numberQuestion:numberQuestion+1,
                    showWarning:false,
                    
                });
                if(this.state.score===2){
                    this.setState({
                        correctTest:true,
                        statusBar:false,
                        statusBarCorrect:true
                    })
                }
                
                
            }else{
                this.setState({
                    answerFalse: correctAnswers[questionAll.id],
                    clickAnswer: answer,
                    showWarning:true,
                    statusBar:false,
                    buttonNextQuestion:false,
                    buttonOut:true
                    
                    
                    
                    })
             
                // let timer=setInterval(()=>{
                //     this.setState({
                //         clickAnswer:0,
                //         correctAnswer:0,
                //         checkb: false,
                //         checked:true,
                //         answerFalse:0,
                //         statusBar:true,
                //         buttonOut:false,
                        
                //     })
                //     clearInterval(timer)
                //   },20000)
                
            }
            console.log('klick',clickAnswer)
            console.log('correct',correctAnswer)
            console.log('answer',answer)
            console.log('kkk',correctAnswers[questionAll.id])
            if(numberQuestion===3){
                this.setState({
                    nextChek:false
                })
            }
        this.setState({
            
                checked:false,
                checkb: null
                
            })
        
        
    }
 
  
        this.nextQuestion = () =>{
          let step=this.state.step
          let number = this.state.number
            
            this.setState({
                step: step + 1,
                nextChek:false,
                checked:true,
                checkb: false,
                correctAnswer:0,
                clickAnswer: 0,
                number:number+1
                
                
        })
        
        if(number===1){
            this.setState({
                animNextQestion_2:true
            })
        }
        if(number===2){
            this.setState({
                animNextQestion_3:true
            })
        }
        
    }
    this.startTimer=(timeLeft)=>{
        clearInterval(this.state.timer)
        let timer = setInterval(()=>{
          var timeLeft = this.state.timeLeft -1
          if (timeLeft ===0){
            clearInterval(timer)
            this.setState({
                clickAnswer:0,
                        correctAnswer:0,
                        checkb: false,
                        checked:true,
                        answerFalse:0,
                        statusBar:true,
                        buttonOut:false,
                        buttonNextQuestion:true
            })
          }
          this.setState({
            timeLeft:timeLeft
          })
        },1000)
        return this.setState({timeLeft: timeLeft,timer:timer})
      }
      this.handleStartTimer=()=>{
        return this.startTimer(this.state.time)
      }
      this.Close=()=>{
          
          this.setState({
            closeTest:true
          })
      }
      this.ProcessedTest=()=>{
            this.setState({
                closeTest:false
            })
      }
      this.Back=()=>{
          this.setState({
            clickAnswer:0,
            correctAnswer:0,
            checkb: false,
            checked:true,
            answerFalse:0,
            statusBar:true,
            buttonOut:false,
            showWarning: false,
            buttonNextQuestion:true,
            reverse:true
          })
      }

      
    

        
        
        
        return(
            <div>
                {/* <h1 className={classnames('deg',{'animateTwo ':this.state.testClass},{'animate ':this.state.testClasst})}>Test</h1>
            <h1>{this.state.number}из 3</h1> */}
            <HeaderTitle/>
            <div>
            <StatusBar 
            status={this.state.statusBar}
            animNextQestion_2={this.state.animNextQestion_2}
            animNextQestion_3={this.state.animNextQestion_3}
            />
            <StatusBarCorrect
            statusBarCorrect={this.state.statusBarCorrect}/>
            </div>
           
            <WarningBanner 
            warn={this.state.showWarning}
            timeLeft={this.state.timeLeft}
            />
            <Question
             question = {question}
            />
            <Answer
            reverse={this.state.reverse}
            answer = {answer}
            chekAnswer={this.chekAnswer} 
            answerFalse={answerFalse}
            correctAnswer={correctAnswer} 
            clickAnswer = {clickAnswer}
            check={this.check}
            checked={this.state.checked} 
            checkb={this.state.checkb} 
            handleStartTimer={this.handleStartTimer}
            startTimer={this.startTimer}
            time={this.state.time}      
             />
            
          
            
            <div>
            <BackToQuestion
            
            buttonOut={this.state.buttonOut}
            Back={this.Back}/>
            <BattonNextQuestion
            nextChek={this.state.nextChek}
            nextQuestion={this.nextQuestion}
            buttonNextQuestion={this.state.buttonNextQuestion}
            />
            <OutTest
            close = {this.Close}
            />
            
            </div>
            
            <CloseTest 
            close={this.state.closeTest}
            ProcessedTest={this.ProcessedTest}
            />
            <CorrectTest
            correctTest={this.state.correctTest}/>
            
            
          
            </div>
            
        )

    }
    
}

