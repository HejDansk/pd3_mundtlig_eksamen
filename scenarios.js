
const scenarios = [
    {
        tema: "Kriminalitet og Straf",
        emne: "Unge og Kriminalitet",
        description_da: "Dette scenarie handler om unge, der begår småkriminalitet, og konsekvenserne for deres fremtid. Det berører også samfundets syn på straf, og hvordan en plettet straffeattest kan påvirke mulighederne for uddannelse og job.",
        description_en: "This scenario is about young people who commit petty crime and the consequences for their future. It also touches on society's view of punishment and how a criminal record can affect opportunities for education and employment.",
        questions: [
            { 
                id: "1A", hasAnswer: true,
                questionText: "Nogle unge mennesker begår småkriminalitet, selvom de ved, at det er ulovligt. Hvorfor tror du alligevel, at de gør det?",
                englishQuestionText: "Some young people commit petty crime, even though they know it's illegal. Why do you think they do it anyway?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, der kan være flere grunde. <span class="phrase-structure">For det første</span> kan det handle om gruppepres eller et ønske om at passe ind i en bestemt social gruppe. <span class="phrase-reason">En anden årsag kan være</span>, at de keder sig og søger spænding. <span class="phrase-structure">Desuden</span> kan det for nogle være et råb om hjælp eller en reaktion på problemer derhjemme eller i skolen. <span class="phrase-elaboration">Det vil sige</span>, at selve kriminaliteten ikke er målet, men et symptom på noget andet.`,
                    english: `<span class="phrase-opinion">I think</span> there can be several reasons. <span class="phrase-structure">Firstly</span>, it can be about peer pressure or a desire to fit into a certain social group. <span class="phrase-reason">Another reason could be</span> that they are bored and seeking excitement. <span class="phrase-structure">Furthermore</span>, for some it might be a cry for help or a reaction to problems at home or in school. <span class="phrase-elaboration">That is to say</span>, the crime itself is not the goal, but a symptom of something else.`
                }
            },
            { 
                id: "1A_2", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for de unges muligheder for at få en uddannelse og et job at de begår småkriminalitet som helt unge?",
                englishQuestionText: "What do you think it means for young people's opportunities to get an education and a job that they commit petty crime at a very young age?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det kan have alvorlige konsekvenser. <span class="phrase-consequence">Konsekvensen er</span>, at en plettet straffeattest kan gøre det meget svært at blive optaget på visse uddannelser eller få job, især dem, der kræver tillid. <span class="phrase-consequence">Dette kan føre til</span> en negativ spiral, hvor de unge føler sig udelukket fra samfundet. <span class="phrase-elaboration">For eksempel</span> kan en drøm om at blive pædagog eller politibetjent blive umulig. <span class="phrase-structure">Så alt i alt</span> kan en dumhed begået i ungdommen sætte dybe spor langt ind i voksenlivet.`,
                    english: `<span class="phrase-opinion">I believe</span> it can have serious consequences. <span class="phrase-consequence">The consequence is</span> that a criminal record can make it very difficult to be admitted to certain educational programs or get jobs, especially those that require trust. <span class="phrase-consequence">This can lead to</span> a negative spiral where the young people feel excluded from society. <span class="phrase-elaboration">For example</span>, a dream of becoming a pedagogue or a police officer could become impossible. <span class="phrase-structure">So all in all</span>, a foolish act committed in youth can leave deep marks long into adult life.`
                }
            },
            { 
                id: "1B", hasAnswer: true, 
                questionText: "På nogle arbejdspladser kan man kun blive ansat, hvis man har en ren straffeattest. Hvorfor tror du, det er sådan?",
                englishQuestionText: "In some workplaces, you can only be hired if you have a clean criminal record. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det primært handler om tillid og sikkerhed. <span class="phrase-reason">Grunden til det er</span>, at arbejdsgiveren skal kunne stole på sine medarbejdere. <span class="phrase-elaboration">For eksempel</span> i job, hvor man arbejder med børn, penge eller følsomme oplysninger, er det afgørende, at medarbejderen er pålidelig. <span class="phrase-structure">Derudover</span> kan det også handle om virksomhedens omdømme. De ønsker ikke at blive associeret med kriminalitet.`,
                    english: `<span class="phrase-opinion">I think</span> it's primarily about trust and security. <span class="phrase-reason">The reason for this is</span> that the employer needs to be able to trust their employees. <span class="phrase-elaboration">For example</span>, in jobs where you work with children, money, or sensitive information, it's crucial that the employee is reliable. <span class="phrase-structure">Furthermore</span>, it can also be about the company's reputation. They don't want to be associated with crime.`
                }
            },
            {
                id: "1B_2", hasAnswer: true, 
                questionText: "Kan der efter din mening være nogen problemer ved, at man på nogle arbejdspladser kun kan blive ansat, hvis man har en ren straffeattest? Hvorfor?/Hvorfor ikke?",
                englishQuestionText: "In your opinion, can there be any problems with the fact that in some workplaces you can only be hired if you have a clean criminal record? Why?/Why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> kan der helt sikkert være problemer ved det. <span class="phrase-structure">På den ene side</span> forstår jeg godt, hvorfor arbejdsgivere i visse brancher, for eksempel i pædagogisk arbejde eller i den finansielle sektor, kræver en ren straffeattest. Det handler om sikkerhed og tillid. <span class="phrase-structure">På den anden side</span> er en stor <span class="phrase-elaboration">ulempe</span>, at det kan gøre det ekstremt svært for tidligere dømte at komme tilbage på arbejdsmarkedet. <span class="phrase-elaboration">Det vil sige</span>, at en fejl, man begik som ung, kan få livslange konsekvenser. <span class="phrase-consequence">Konsekvensen er</span>, at <span class="phrase-consequence">det kan føre til</span> social udstødelse og måske endda øge risikoen for ny kriminalitet, <span class="phrase-reason">fordi</span> folk ikke kan få et job og en stabil indkomst. <span class="phrase-structure">Så alt i alt</span>, <span class="phrase-opinion">mener jeg</span>, at selvom kravet er forståeligt i nogle job, så er det et problem, hvis det bliver en generel barriere, der forhindrer folk i at få en ny chance i livet.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, there can definitely be problems with that. <span class="phrase-structure">On the one hand</span>, I understand why employers in certain fields, for example in pedagogical work or in the financial sector, require a clean criminal record. It's about security and trust. <span class="phrase-structure">On the other hand</span>, a major <span class="phrase-elaboration">disadvantage</span> is that it can make it extremely difficult for formerly convicted individuals to return to the job market. <span class="phrase-elaboration">That is to say</span>, a mistake one made when young can have lifelong consequences. <span class="phrase-consequence">The consequence is</span> that <span class="phrase-consequence">it can lead to</span> social exclusion and perhaps even increase the risk of new crime, <span class="phrase-reason">because</span> people cannot get a job and a stable income. <span class="phrase-structure">So all in all</span>, <span class="phrase-opinion">I believe</span> that although the requirement is understandable in some jobs, it is a problem if it becomes a general barrier that prevents people from getting a second chance in life.`
                }
            },
            { 
                id: "2", hasAnswer: true, 
                questionText: "Nogle mener ikke, at helt unge skal kunne straffes efter straffeloven. Hvilke fordele og ulemper mener du, der kan være ved, at helt unge ikke kan straffes efter straffeloven?",
                englishQuestionText: "Some people believe that very young people should not be punishable under the criminal code. What advantages and disadvantages do you think there can be to very young people not being punishable under the criminal code?",
                answer: {
                    danish: `<span class="phrase-complexity">Det er et komplekst spørgsmål</span>. <span class="phrase-structure">På den ene side</span> er en <span class="phrase-elaboration">fordel</span>, at man anerkender, at unge under 15 år ikke er fuldt udviklede og måske ikke forstår konsekvenserne af deres handlinger. Fokus kan i stedet være på pædagogik og social hjælp, hvilket kan være mere effektivt til at forhindre fremtidig kriminalitet. <span class="phrase-structure">På den anden side</span> kan en <span class="phrase-elaboration">ulempe</span> være, at ofrene for kriminaliteten måske ikke føler, at der sker retfærdighed. <span class="phrase-structure">Desuden</span> kan det sende et signal til de unge om, at deres handlinger ikke har alvorlige konsekvenser.`,
                    english: `<span class="phrase-complexity">That is a complex question</span>. <span class="phrase-structure">On the one hand</span>, an <span class="phrase-elaboration">advantage</span> is that one acknowledges that young people under 15 are not fully developed and may not understand the consequences of their actions. The focus can instead be on pedagogy and social help, which can be more effective at preventing future crime. <span class="phrase-structure">On the other hand</span>, a <span class="phrase-elaboration">disadvantage</span> can be that the victims of the crime may not feel that justice is served. <span class="phrase-structure">Furthermore</span>, it can send a signal to the young people that their actions do not have serious consequences.`
                }
            },
            { 
                id: "2_2", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for kriminaliteten i samfundet, at unge under 15 år ikke kan straffes efter straffeloven?",
                englishQuestionText: "What do you think it means for crime in society that young people under 15 cannot be punished under the criminal code?",
                answer: {
                        danish: `<span class="phrase-opinion">Personligt tror jeg</span>, at det har en begrænset betydning for den samlede kriminalitet. <span class="phrase-reason">Grunden til det er</span>, at selvom de ikke kan straffes med fængsel, så bliver deres kriminalitet registreret, og de sociale myndigheder bliver involveret. <span class="phrase-consequence">Dette kan føre til</span> tvungne sociale foranstaltninger, som kan være meget indgribende. <span class="phrase-opinion">Jeg mener</span> dog, at det er afgørende for samfundets retsfølelse, at der er en klar reaktion på alvorlig kriminalitet, uanset alder.`,
                        english: `<span class="phrase-opinion">Personally, I think</span> it has a limited impact on overall crime rates. <span class="phrase-reason">The reason for this is</span> that even though they cannot be punished with prison, their crimes are registered, and the social authorities get involved. <span class="phrase-consequence">This can lead to</span> compulsory social interventions, which can be very intrusive. <span class="phrase-opinion">However, I believe</span> it is crucial for society's sense of justice that there is a clear reaction to serious crime, regardless of age.`
                }
            }
        ]
    },
    {
        tema: "Hverdagsliv og Relationer",
        emne: "Børneopdragelse",
        description_da: "Dette emne fokuserer på forskellige tilgange til børneopdragelse i Danmark. Det dækker emner som børns pligter i hjemmet, grænser for skærmtid og balancen mellem at give børn frihed og at sætte rammer for deres udvikling.",
        description_en: "This topic focuses on different approaches to child-rearing in Denmark. It covers subjects like children's chores at home, limits on screen time, and the balance between giving children freedom and setting boundaries for their development.",
        questions: [
                { 
                id: "1A", hasAnswer: true,
                questionText: "Mange forældre opdrager deres børn til at hjælpe til med husarbejdet fra en tidlig alder. Hvorfor tror du, det er sådan?",
                englishQuestionText: "Many parents raise their children to help with housework from an early age. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det handler mere om pædagogik end om praktisk hjælp. <span class="phrase-reason">En af årsagerne er</span>, at forældrene ønsker at lære deres børn ansvar og vigtigheden af at være en del af et fællesskab. <span class="phrase-consequence">Det betyder</span>, at børnene lærer, at alle i en familie skal bidrage. <span class="phrase-structure">Derudover</span> kan det styrke børns selvtillid at mestre opgaver og føle sig nyttige.`,
                    english: `<span class="phrase-opinion">I think</span> it's more about pedagogy than practical help. <span class="phrase-reason">One of the reasons is</span> that parents want to teach their children responsibility and the importance of being part of a community. <span class="phrase-consequence">This means</span> that the children learn that everyone in a family must contribute. <span class="phrase-structure">Furthermore</span>, mastering tasks and feeling useful can boost children's self-confidence.`
                }
            },
                { 
                id: "1A_2", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for børn at have pligter derhjemme?",
                englishQuestionText: "What do you think it means for children to have chores at home?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det har en meget positiv betydning for deres udvikling. <span class="phrase-consequence">Det påvirker</span> dem på den måde, at de udvikler praktiske færdigheder og en forståelse for, at opgaver ikke løser sig selv. <span class="phrase-structure">Desuden</span> lærer de at strukturere deres tid og tage ansvar. <span class="phrase-opinion">Personligt tror jeg</span>, det forbereder dem godt til voksenlivet, hvor de skal klare sig selv.`,
                    english: `<span class="phrase-opinion">I believe</span> it has a very positive impact on their development. <span class="phrase-consequence">It affects</span> them in the way that they develop practical skills and an understanding that tasks don't solve themselves. <span class="phrase-structure">Moreover</span>, they learn to structure their time and take responsibility. <span class="phrase-opinion">Personally, I think</span> it prepares them well for adult life, where they will have to manage on their own.`
                }
            },
                {
                id: "1B", hasAnswer: true, 
                questionText: "Nogle forældre sætter grænser for, hvor mange timer deres børn må bruge på smartphones, computer eller TV. Hvorfor tror du, det er sådan?",
                englishQuestionText: "Some parents set limits on how many hours their children can spend on smartphones, computers, or TV. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror, at</span> forældre sætter grænser for skærmtid af flere vigtige årsager. <span class="phrase-structure">Først og fremmest</span> er der en bekymring for børnenes sundhed. <span class="phrase-reason">Det skyldes, at</span> for meget tid foran en skærm kan påvirke både søvn og fysisk aktivitet negativt. <span class="phrase-structure">Derudover</span> handler det nok også om at fremme andre typer af aktiviteter. <span class="phrase-elaboration">Med andre ord</span> ønsker forældrene måske, at deres børn skal bruge tid på kreativ leg, læsning eller socialt samvær med familien og venner ansigt til ansigt. <span class="phrase-reason">En af årsagerne kan være, at</span> de mener, disse aktiviteter er vigtigere for barnets generelle udvikling. <span class="phrase-opinion">Personligt tror jeg, at</span> det er en fornuftig tilgang, <span class="phrase-reason">fordi</span> det hjælper børn med at finde en sund balance i deres hverdag.`,
                    english: `<span class="phrase-opinion">I believe that</span> parents set limits on screen time for several important reasons. <span class="phrase-structure">First and foremost</span>, there is a concern for the children's health. <span class="phrase-reason">This is because</span> too much time in front of a screen can negatively affect both sleep and physical activity. <span class="phrase-structure">Furthermore</span>, it is also likely about promoting other types of activities. <span class="phrase-elaboration">In other words</span>, parents may want their children to spend time on creative play, reading, or social interaction with family and friends face-to-face. <span class="phrase-reason">One of the reasons could be that</span> they believe these activities are more important for the child's general development. <span class="phrase-opinion">Personally, I believe</span> it is a sensible approach <span class="phrase-reason">because</span> it helps children find a healthy balance in their daily lives.`
                }
            },
            { 
                id: "1B_2", hasAnswer: true, 
                questionText: "Kan der være nogen problemer ved, at forældre bestemmer meget over, hvad deres børn skal lave i deres fritid?",
                englishQuestionText: "Can there be any problems with parents deciding a lot about what their children do in their free time?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> kan der godt være problemer. <span class="phrase-structure">På den ene side</span> er det godt med forældre, der engagerer sig. <span class="phrase-structure">På den anden side</span> kan en <span class="phrase-elaboration">ulempe</span> være, at barnet ikke lærer at træffe sine egne valg og finde sine egne interesser. <span class="phrase-consequence">Dette kan føre til</span>, at barnet bliver uselvstændigt eller gør oprør mod forældreens kontrol. Det handler om at finde en balance.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, there can certainly be problems. <span class="phrase-structure">On the one hand</span>, it's good to have engaged parents. <span class="phrase-structure">On the other hand</span>, a <span class="phrase-elaboration">disadvantage</span> can be that the child doesn't learn to make their own choices and find their own interests. <span class="phrase-consequence">This can lead to</span> the child becoming dependent or rebelling against the parents' control. It's about finding a balance.`
                }
            },
            { 
                id: "2", hasAnswer: true, 
                questionText: "Nogle forældre vælger at opdrage deres børn uden at skælde ud eller straffe, men ved i stedet at tale med dem som næsten ligeværdige parter. Hvilke fordele og ulemper mener du, der kan være ved det?",
                englishQuestionText: "Some parents choose to raise their children without scolding or punishment, but instead by talking to them as almost equal partners. What advantages and disadvantages do you think there can be to that?",
                answer: {
                    danish: `En klar <span class="phrase-elaboration">fordel</span> er, at det kan skabe et meget tæt og tillidsfuldt forhold mellem barn og forælder. Barnet lærer at argumentere for sine synspunkter og løse konflikter gennem dialog. <span class="phrase-structure">Dog</span> kan en <span class="phrase-elaboration">ulempe</span> være, at barnet kan få svært ved at forstå og acceptere autoriteter senere i livet, hvis grænserne er for utydelige. <span class="phrase-elaboration">Det vil sige</span>, at barnet kan mangle en forståelse for, at nogle gange bestemmer de voksne.`,
                    english: `A clear <span class="phrase-elaboration">advantage</span> is that it can create a very close and trusting relationship between child and parent. The child learns to argue for their views and resolve conflicts through dialogue. <span class="phrase-structure">However</span>, a <span class="phrase-elaboration">disadvantage</span> can be that the child may find it difficult to understand and accept authorities later in life if the boundaries are too unclear. <span class="phrase-elaboration">That is to say</span>, the child may lack an understanding that sometimes adults are in charge.`
                }
            },
            { 
                id: "2_2", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for børns respekt for autoriteter, hvis deres forældre altid taler med dem som næsten ligeværdige parter?",
                englishQuestionText: "What do you think it means for children's respect for authorities if their parents always talk to them as almost equal partners?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det kan påvirke deres respekt for autoriteter som lærere eller arbejdsgivere. <span class="phrase-consequence">Konsekvensen kan være</span>, at de forventer at kunne forhandle om alle regler og beslutninger. <span class="phrase-structure">På den anden side</span> kan det også betyde, at de udvikler en mere kritisk og selvstændig tankegang og ikke bare blindt følger autoriteter, hvilket også kan være en <span class="phrase-elaboration">fordel</span>.`,
                    english: `<span class="phrase-opinion">I think</span> it can affect their respect for authorities like teachers or employers. <span class="phrase-consequence">The consequence could be</span> that they expect to be able to negotiate all rules and decisions. <span class="phrase-structure">On the other hand</span>, it could also mean that they develop a more critical and independent way of thinking and don't just blindly follow authorities, which can also be an <span class="phrase-elaboration">advantage</span>.`
                }
            }
        ]
    },
    {
        tema: "Hverdagsliv og Relationer",
        emne: "Boformer og Livsstil",
        description_da: "Dette tema omhandler de valg, folk træffer om, hvor og hvordan de bor. Det dækker overvejelser om at flytte fra by til forstad, fordele og ulemper ved bofællesskaber, og valget af en alternativ, mindre materialistisk livsstil.",
        description_en: "This theme deals with the choices people make about where and how they live. It covers considerations about moving from the city to the suburbs, the pros and cons of co-housing communities, and the choice of an alternative, less materialistic lifestyle.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Nogle mennesker flytter i hus i en forstad eller en mindre by, når de har fået børn. Hvorfor tror du, de gør det?",
                englishQuestionText: "Some people move to a house in a suburb or a smaller town when they have children. Why do you think they do that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, de gør det for at give deres børn mere plads og natur. <span class="phrase-reason">Grunden til det er</span>, at en have og grønne områder giver bedre muligheder for leg. <span class="phrase-structure">Desuden</span> er lokalsamfundet i mindre byer ofte mere overskueligt og trygt for børn at vokse op i.`,
                    english: `<span class="phrase-opinion">I think</span> they do it to give their children more space and nature. <span class="phrase-reason">The reason for this is</span> that a garden and green areas provide better opportunities for play. <span class="phrase-structure">Furthermore</span>, the local community in smaller towns is often more manageable and safe for children to grow up in.`
                }
            },
            {
                id: "1A_2", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for en barnefamilies hverdag at bo i et hus i en mindre by i stedet for i en lejlighed midt i en stor by?",
                englishQuestionText: "What do you think it means for a family's daily life to live in a house in a smaller town instead of an apartment in the middle of a big city?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det kan betyde en roligere og mere struktureret hverdag. <span class="phrase-consequence">Det påvirker</span> dem på den måde, at transporttiden måske er længere, men til gengæld er der mere fred og ro derhjemme. <span class="phrase-structure">På den anden side</span> kan man gå glip af de mange kulturelle tilbud, som en storby har.`,
                    english: `<span class="phrase-opinion">I believe</span> it can mean a calmer and more structured daily life. <span class="phrase-consequence">It affects</span> them in the way that travel time might be longer, but in return, there is more peace and quiet at home. <span class="phrase-structure">On the other hand</span>, one might miss out on the many cultural offerings that a big city has.`
                }
            },
                {
                id: "1B", hasAnswer: true,
                questionText: "Nogle mennesker vælger at flytte i bofællesskaber. Hvorfor tror du, de vælger det?",
                englishQuestionText: "Some people choose to move into co-housing communities. Why do you think they choose that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det handler om et ønske om fællesskab og social interaktion. <span class="phrase-reason">En årsag kan være</span>, at de ønsker at bekæmpe ensomhed og have naboer, de deler værdier og hverdag med. <span class="phrase-structure">Desuden</span> kan der være praktiske <span class="phrase-elaboration">fordele</span> som fællesspisning og deling af ressourcer.`,
                    english: `<span class="phrase-opinion">I think</span> it's about a desire for community and social interaction. <span class="phrase-reason">One reason could be</span> that they want to combat loneliness and have neighbors with whom they share values and daily life. <span class="phrase-structure">Furthermore</span>, there can be practical <span class="phrase-elaboration">advantages</span> like communal dining and sharing resources.`
                }
            },
            {
                id: "1B_2", hasAnswer: true, 
                questionText: "Kan der efter din mening være nogen problemer ved at bo i bofællesskab? Hvorfor?/Hvorfor ikke?",
                englishQuestionText: "In your opinion, can there be any problems with living in a co-housing community? Why?/Why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> kan der sagtens være problemer. <span class="phrase-elaboration">En ulempe</span> er, at man skal indgå mange kompromiser og deltage i fælles beslutninger, hvilket kan være tidskrævende og føre til konflikter. Man har mindre privatliv end i en almindelig bolig. <span class="phrase-structure">Så alt i alt</span> kræver det en høj grad af tolerance og sociale færdigheder.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, there can certainly be problems. <span class="phrase-elaboration">A disadvantage</span> is that you have to make many compromises and participate in common decisions, which can be time-consuming and lead to conflicts. You have less privacy than in a regular home. <span class="phrase-structure">So all in all</span>, it requires a high degree of tolerance and social skills.`
                }
            },
            {
                id: "2", hasAnswer: true, 
                questionText: "Nogle mennesker vælger en alternativ livsstil uden tv og sociale medier, og hvor de ikke prioriterer materiel luksus. Hvilke fordele og ulemper mener du, der kan være ved det?",
                englishQuestionText: "Some people choose an alternative lifestyle without TV and social media, and where they do not prioritize material luxury. What advantages and disadvantages do you think there can be to that?",
                answer: {
                    danish: `<span class="phrase-structure">På den ene side</span> er en <span class="phrase-elaboration">fordel</span>, at man kan opnå mere ro og nærvær. Man bliver mindre påvirket af forbrugspres og kan fokusere på relationer og naturoplevelser. <span class="phrase-structure">På den anden side</span> kan en <span class="phrase-elaboration">ulempe</span> være, at man kan blive socialt isoleret og gå glip af vigtig information og samfundsdebatter, der foregår online.`,
                    english: `<span class="phrase-structure">On the one hand</span>, an <span class="phrase-elaboration">advantage</span> is that one can achieve more peace and presence. You become less affected by consumer pressure and can focus on relationships and nature experiences. <span class="phrase-structure">On the other hand</span>, a <span class="phrase-elaboration">disadvantage</span> can be that you might become socially isolated and miss out on important information and societal debates that take place online.`
                }
            }
        ]
    },
    {
        tema: "Velfærd og Økonomi",
        emne: "Unge og Økonomi",
        description_da: "Dette scenarie fokuserer på unges økonomiske vaner og beslutninger. Emnerne inkluderer studielån (SU-lån), dyre SMS-lån og den økonomiske indflydelse, forældre kan have på deres børns liv.",
        description_en: "This scenario focuses on young people's financial habits and decisions. Topics include student loans (SU loans), expensive SMS loans, and the financial influence parents can have on their children's lives.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "De fleste studerende kan få økonomisk støtte (SU), men der er mange studerende, der også vælger at tage et studielån. Hvorfor tror du, det er sådan?",
                englishQuestionText: "Most students can receive financial support (SU), but many students also choose to take out a student loan. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det ofte er en nødvendighed for at få økonomien til at hænge sammen, især i de store byer hvor huslejen er høj. <span class="phrase-reason">En anden årsag kan være</span> et ønske om at have råd til et socialt liv, rejser eller andre oplevelser under studietiden, som SU'en alene ikke dækker.`,
                    english: `<span class="phrase-opinion">I think</span> it's often a necessity to make ends meet, especially in big cities where rent is high. <span class="phrase-reason">Another reason could be</span> a desire to afford a social life, travel, or other experiences during their studies, which the SU grant alone does not cover.`
                }
            },
            {
                id: "1A_2", hasAnswer: true, 
                questionText: "Mener du, der kan være nogen problemer ved, at studerende tager et studielån? Hvorfor/hvorfor ikke?",
                englishQuestionText: "Do you think there can be any problems with students taking out a student loan? Why/why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> kan der være problemer. <span class="phrase-elaboration">En ulempe</span> er, at de starter deres voksenliv med gæld. <span class="phrase-consequence">Dette kan påvirke</span> deres muligheder for at købe bolig eller starte familie. <span class="phrase-structure">På den anden side</span> giver lånet dem mulighed for at fokusere på studiet i stedet for at skulle arbejde meget ved siden af.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, there can be problems. <span class="phrase-elaboration">A disadvantage</span> is that they start their adult life with debt. <span class="phrase-consequence">This can affect</span> their ability to buy a home or start a family. <span class="phrase-structure">On the other hand</span>, the loan allows them to focus on their studies instead of having to work a lot on the side.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Mange unge tager hurtige lån via deres mobiltelefon, selvom det ofte er meget dyrt at låne penge på den måde. Hvorfor tror du alligevel, de gør det?",
                englishQuestionText: "Many young people take out quick loans via their mobile phones, even though it is often very expensive to borrow money that way. Why do you think they do it anyway?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det skyldes, at det er utroligt nemt og hurtigt. Man kan få pengene med det samme uden at skulle tale med en bankrådgiver. <span class="phrase-reason">Det appellerer til</span> et ønske om øjeblikkelig behovstilfredsstillelse. Måske tænker de ikke over de langsigtede <span class="phrase-consequence">konsekvenser</span> og de høje renter.`,
                    english: `<span class="phrase-opinion">I think</span> it's because it's incredibly easy and fast. You can get the money immediately without having to talk to a bank advisor. <span class="phrase-reason">It appeals to</span> a desire for instant gratification. Perhaps they don't think about the long-term <span class="phrase-consequence">consequences</span> and the high interest rates.`
                }
            }
        ]
    },
    {
        tema: "Klima og Miljø",
        emne: "Myldretidstrafik",
        description_da: "Dette scenarie tager fat på udfordringerne ved myldretidstrafik i de store byer. Det undersøger, hvorfor mange vælger bilen, og diskuterer mulige løsninger som kørselsafgifter over for forbedringer i den offentlige transport.",
        description_en: "This scenario addresses the challenges of rush hour traffic in big cities. It examines why many people choose to drive and discusses possible solutions such as road tolls versus improvements in public transportation.",
        questions: [
            { 
                id: "1A", hasAnswer: true, 
                questionText: "Mange mennesker vælger at køre i bil til arbejde, selvom der er kø på vejene. Hvorfor tror du, de gør det?",
                englishQuestionText: "Many people choose to drive to work, even though there is traffic on the roads. Why do you think they do that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det skyldes en kombination af fleksibilitet og bekvemmelighed. <span class="phrase-reason">Grunden til det er</span>, at bilen giver en frihed til at køre, præcis hvornår og hvorhen man vil, uden at være afhængig af køreplaner. <span class="phrase-structure">Derudover</span> kan det for familier med børn være praktisk at kunne transportere alle på én gang og handle ind på vejen hjem.`,
                    english: `<span class="phrase-opinion">I think</span> it's due to a combination of flexibility and convenience. <span class="phrase-reason">The reason for this is</span> that the car provides the freedom to drive exactly when and where you want, without being dependent on schedules. <span class="phrase-structure">Furthermore</span>, for families with children, it can be practical to transport everyone at once and do grocery shopping on the way home.`
                }
            },
            { 
                id: "1A_2", hasAnswer: true, 
                questionText: "Er det efter din mening et problem, at folk i områder med kø på vejene vælger at køre i bil til arbejde i stedet for at tage bus eller tog? Hvorfor?/Hvorfor ikke?",
                englishQuestionText: "In your opinion, is it a problem that people in areas with traffic jams choose to drive to work instead of taking the bus or train? Why?/Why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> er det et stort problem. <span class="phrase-reason">Det er det, fordi</span> det skaber trængsel, luftforurening og stress for alle. <span class="phrase-consequence">Konsekvensen er</span>, at det påvirker både miljøet og folkesundheden negativt. <span class="phrase-opinion">Jeg mener</span>, at samfundet har en interesse i at fremme mere bæredygtige transportformer.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, it is a big problem. <span class="phrase-reason">It is, because</span> it creates congestion, air pollution, and stress for everyone. <span class="phrase-consequence">The consequence is</span> that it negatively affects both the environment and public health. <span class="phrase-opinion">I believe</span> that society has an interest in promoting more sustainable forms of transport.`
                }
            },
            { 
                id: "1B", hasAnswer: true,
                questionText: "Nogle mennesker vælger at tage bus eller tog til arbejde, selvom de har bil. Hvorfor tror du, de gør det?",
                englishQuestionText: "Some people choose to take the bus or train to work, even though they have a car. Why do you think they do that?",
                answer: {
                    danish: `<span class="phrase-reason">En af årsagerne kan være</span>, at de vil spare penge på benzin og parkering. <span class="phrase-structure">En anden grund</span> er, at de kan bruge transporttiden på at arbejde, læse eller slappe af i stedet for at sidde stresset i en bilkø. <span class="phrase-structure">Desuden</span> er der mange, der gør det af hensyn til miljøet.`,
                    english: `<span class="phrase-reason">One of the reasons could be</span> that they want to save money on gas and parking. <span class="phrase-structure">Another reason</span> is that they can use the travel time to work, read, or relax instead of sitting stressed in a traffic jam. <span class="phrase-structure">Furthermore</span>, many do it for environmental reasons.`
                }
            },
            { 
                id: "1B_2", hasAnswer: true, 
                questionText: "Er det efter din mening et problem, at folk i mindre byer ikke har så gode muligheder for at tage bus eller tog til arbejde? Hvorfor?/Hvorfor ikke?",
                englishQuestionText: "In your opinion, is it a problem that people in smaller towns do not have good opportunities to take the bus or train to work? Why?/Why not?",
                answer: {
                    danish: `Ja, det er helt sikkert et problem. <span class="phrase-reason">Det er det, fordi</span> det skaber ulighed og gør folk i landdistrikterne afhængige af at have en bil. <span class="phrase-consequence">Dette kan føre til</span>, at unge og ældre uden kørekort bliver socialt isolerede. <span class="phrase-opinion">Jeg mener</span>, at god offentlig transport er en vigtig del af velfærden, uanset hvor man bor.`,
                    english: `Yes, that is definitely a problem. <span class="phrase-reason">It is, because</span> it creates inequality and makes people in rural areas dependent on having a car. <span class="phrase-consequence">This can lead to</span> young people and the elderly without a driver's license becoming socially isolated. <span class="phrase-opinion">I believe</span> that good public transport is an important part of the welfare system, regardless of where you live.`
                }
            },
            {
                id: "2", hasAnswer: true, 
                questionText: "Hvad tror du, der er mest effektivt, hvis man ønsker at begrænse biltrafikken i de store byer: kørselsafgifter eller bedre og billigere offentlig transport?",
                englishQuestionText: "What do you think is most effective if you want to limit car traffic in big cities: road tolls or better and cheaper public transport?",
                answer: {
                    danish: `<span class="phrase-complexity">Det er et komplekst spørgsmål</span>, for jeg tror, den mest effektive løsning er en kombination. Men hvis jeg skal vælge, <span class="phrase-opinion">mener jeg, at</span> bedre og billigere offentlig transport er mest effektivt på lang sigt. <span class="phrase-reason">Grunden til det er, at</span> det tilbyder et positivt alternativ i stedet for en straf. Kørselsafgifter kan være effektive til at reducere trafikken hurtigt. <span class="phrase-structure">Dog</span> er en <span class="phrase-elaboration">ulempe</span>, at de kan opfattes som socialt uretfærdige. <span class="phrase-structure">På den anden side</span>, hvis offentlig transport bliver så god og billig, at det er det nemmeste valg for de fleste, så vil folk vælge det af sig selv. <span class="phrase-elaboration">For eksempel</span>, hvis bussen kører hvert femte minut og er billigere end at parkere, bliver valget let. <span class="phrase-structure">Så for at opsummere</span>, selvom afgifter har en effekt, tror jeg, at et attraktivt alternativ skaber en mere varig og positiv forandring.`,
                    english: `<span class="phrase-complexity">That's a complex question</span>, as I believe the most effective solution is a combination. But if I have to choose, <span class="phrase-opinion">I believe that</span> better and cheaper public transport is most effective in the long run. <span class="phrase-reason">The reason for that is that</span> it offers a positive alternative instead of a punishment. Congestion charges can be effective at reducing traffic quickly. <span class="phrase-structure">However</span>, a <span class="phrase-elaboration">disadvantage</span> is that they can be perceived as socially unjust. <span class="phrase-structure">On the other hand</span>, if public transport becomes so good and cheap that it is the easiest choice for most people, then people will choose it on their own. <span class="phrase-elaboration">For example</span>, if the bus runs every five minutes and is cheaper than parking, the choice becomes easy. <span class="phrase-structure">So to summarize</span>, although charges have an effect, I believe an attractive alternative creates a more lasting and positive change.`
                }
            }
        ]
    },
    {
        tema: "Medier, Kultur og Teknologi",
        emne: "Børns brug af tablets",
        description_da: "Dette emne undersøger den stigende brug af tablets blandt børn, både til underholdning og i undervisningen. Spørgsmålene fokuserer på årsagerne til denne tendens samt de potentielle konsekvenser for børns sociale relationer og faglige udvikling.",
        description_en: "This topic examines the increasing use of tablets among children, both for entertainment and in education. The questions focus on the reasons for this trend and the potential consequences for children's social relationships and academic development.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Nogle børn bruger meget tid på at spille på deres tablet. Hvorfor tror du, det er sådan?",
                englishQuestionText: "Some children spend a lot of time playing on their tablet. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det er en kombination af, at spillene er designet til at være meget engagerende, og at det er en nem og tilgængelig form for underholdning. <span class="phrase-structure">Desuden</span> kan det være en måde for børn at slappe af på eller have noget at lave, når forældrene har travlt.`,
                    english: `<span class="phrase-opinion">I think</span> it's a combination of the games being designed to be very engaging and it being an easy and accessible form of entertainment. <span class="phrase-structure">Furthermore</span>, it can be a way for children to relax or have something to do when their parents are busy.`
                }
            },
            {
                id: "1A_2", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for børns sociale relationer, at de har en tablet?",
                englishQuestionText: "What do you think it means for children's social relationships that they have a tablet?",
                answer: {
                    danish: `<span class="phrase-structure">På den ene side</span> kan det give adgang til online fællesskaber med andre, der deler samme interesser. <span class="phrase-structure">På den anden side</span> kan der være en <span class="phrase-elaboration">risiko for</span>, at det tager tid fra fysisk leg og direkte social kontakt med venner, hvilket kan svække deres sociale kompetencer i den virkelige verden.`,
                    english: `<span class="phrase-structure">On the one hand</span>, it can provide access to online communities with others who share the same interests. <span class="phrase-structure">On the other hand</span>, there can be a <span class="phrase-elaboration">risk</span> that it takes time away from physical play and direct social contact with friends, which can weaken their social skills in the real world.`
                }
            },
                {
                id: "1B", hasAnswer: true,
                questionText: "Mange skoler køber tablets til brug i undervisningen, selvom det koster mange penge. Hvorfor tror du, at det er sådan?",
                englishQuestionText: "Many schools buy tablets for use in teaching, even though it costs a lot of money. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, skolerne gør det for at forberede eleverne til en digital fremtid. <span class="phrase-reason">Grunden til det er</span>, at digitale kompetencer er afgørende på arbejdsmarkedet. <span class="phrase-structure">Desuden</span> kan tablets give adgang til interaktive læringsmaterialer, som kan øge elevernes motivation.`,
                    english: `<span class="phrase-opinion">I think</span> schools do it to prepare students for a digital future. <span class="phrase-reason">The reason for this is</span> that digital skills are crucial in the job market. <span class="phrase-structure">Furthermore</span>, tablets can provide access to interactive learning materials, which can increase student motivation.`
                }
            }
        ]
    },
    {
        tema: "Sundhed og Livsstil",
        emne: "Kost og Livsstil",
        description_da: "Dette tema handler om danskernes kostvaner og livsstil. Det berører, hvorfor mange spiser usundt på trods af sundhedskampagner, og den tætte forbindelse mellem socialt samvær og indtagelse af mad og drikke.",
        description_en: "This theme is about Danes' dietary habits and lifestyle. It touches upon why many eat unhealthily despite health campaigns, and the close connection between social gatherings and the consumption of food and drink.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Sundhedsstyrelsen laver hvert år sundhedskampagner. Alligevel spiser mange mennesker mere fedt og sukker og drikker mere alkohol, end Sundhedsstyrelsen anbefaler. Hvorfor tror du, de gør det?",
                englishQuestionText: "The Danish Health Authority runs health campaigns every year. Nevertheless, many people eat more fat and sugar and drink more alcohol than recommended. Why do you think they do that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det skyldes, at vaner er svære at ændre, og at usund mad ofte er let tilgængelig og billig. <span class="phrase-structure">Desuden</span> er mad og drikke tæt forbundet med hygge og socialt samvær, hvilket kan gøre det svært at sige nej tak.`,
                    english: `<span class="phrase-opinion">I think</span> it's because habits are hard to change, and unhealthy food is often easily accessible and cheap. <span class="phrase-structure">Furthermore</span>, food and drink are closely linked to 'hygge' and social gatherings, which can make it difficult to say no.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "For mange mennesker hører socialt samvær og rigeligt med god mad og drikke tæt sammen. Hvorfor tror du, det er sådan?",
                englishQuestionText: "For many people, social gatherings and plenty of good food and drink are closely linked. Why do you think that is?",
                answer: {
                    danish: `<span class="phrase-reason">Jeg tror, det er en kulturel ting</span>. At dele et måltid er en fundamental måde at skabe bånd og vise gæstfrihed på. Det er en central del af 'hygge'-begrebet. <span class="phrase-elaboration">Det vil sige</span>, at maden ikke kun er næring, men også rammen om det sociale.`,
                    english: `<span class="phrase-reason">I think it's a cultural thing</span>. Sharing a meal is a fundamental way to create bonds and show hospitality. It's a central part of the concept of 'hygge'. <span class="phrase-elaboration">That is to say</span>, the food is not just nourishment, but also the setting for the social interaction.`
                }
            }
        ]
    },
    // --- Custom Scenarios ---
    {
        tema: "Medier, Kultur og Teknologi",
        emne: "Digital Udelukkelse",
        description_da: "Scenariet omhandler udfordringerne, som især ældre borgere kan opleve med den stigende digitalisering. Diskussionen fokuserer på konsekvenserne for de berørte og samfundets ansvar for at hjælpe.",
        description_en: "This scenario addresses the challenges that elderly citizens, in particular, may experience with increasing digitalization. The discussion focuses on the consequences for those affected and society's responsibility to help.",
        questions: [
            { 
                id: "1A", hasAnswer: true, 
                questionText: "Mange ældre borgere i Danmark har svært ved at bruge digitale løsninger som MitID og Digital Post. Hvorfor tror du, det er svært for dem?",
                englishQuestionText: "Many elderly citizens in Denmark find it difficult to use digital solutions like MitID and Digital Post. Why do you think it is difficult for them?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det er svært af flere grunde. <span class="phrase-structure">For det første</span> er de ikke vokset op med teknologien på samme måde som yngre generationer. <span class="phrase-reason">Det skyldes</span>, at de mangler den grundlæggende digitale intuition. <span class="phrase-structure">For det andet</span> kan de være bange for at lave fejl, især når det handler om personlige oplysninger eller penge. <span class="phrase-structure">Derudover</span> kan sproget og designet i digitale løsninger virke forvirrende.`,
                    english: `<span class="phrase-opinion">I think</span> it's difficult for several reasons. <span class="phrase-structure">Firstly</span>, they didn't grow up with the technology in the same way younger generations did. <span class="phrase-reason">This is because</span> they lack the basic digital intuition. <span class="phrase-structure">Secondly</span>, they might be afraid of making mistakes, especially when it involves personal information or money. <span class="phrase-structure">Furthermore</span>, the language and design in digital solutions can seem confusing.`
                }
            },
            { 
                id: "1B", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for de ældres livskvalitet og selvstændighed, at så meget kommunikation er blevet digital?",
                englishQuestionText: "What do you think it means for the quality of life and independence of the elderly that so much communication has become digital?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det kan have en meget negativ betydning. <span class="phrase-consequence">Konsekvensen er</span>, at de kan føle sig afhængige af hjælp fra familie eller venner til simple opgaver som at tjekke banken eller læse post fra kommunen. <span class="phrase-consequence">Dette kan føre til</span> en følelse af tabt selvstændighed og isolation. <span class="phrase-structure">På den anden side</span> kan de, der lærer det, opleve en ny verden af muligheder.`,
                    english: `<span class="phrase-opinion">I believe</span> it can have a very negative impact. <span class="phrase-consequence">The consequence is</span> that they may feel dependent on help from family or friends for simple tasks like checking their bank account or reading mail from the municipality. <span class="phrase-consequence">This can lead to</span> a feeling of lost independence and isolation. <span class="phrase-structure">On the other hand</span>, for those who learn it, it can open up a new world of possibilities.`
                }
            },
            {
                id: "2", hasAnswer: true, 
                questionText: "Nogle mener, at det offentlige skal gøre mere for at hjælpe de borgere, der har svært ved det digitale. Hvilke fordele og ulemper mener du, der kan være ved, at det offentlige bruger flere ressourcer på dette?",
                englishQuestionText: "Some people believe that the public sector should do more to help citizens who struggle with digital technology. What advantages and disadvantages do you think there can be to the public sector spending more resources on this?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg synes</span>, det er et meget relevant spørgsmål. <span class="phrase-structure">På den ene side</span> er en klar <span class="phrase-elaboration">fordel</span> ved at tilbyde mere personlig hjælp, at det kan modvirke social og digital udelukkelse. <span class="phrase-consequence">Det betyder</span>, at ældre borgere kan føle sig mere trygge og inkluderede i samfundet. <span class="phrase-structure">Ydermere</span> sikrer det, at alle borgere, uanset deres digitale kompetencer, har adgang til vigtig information og service fra det offentlige, hvilket <span class="phrase-opinion">jeg mener</span> er en grundlæggende rettighed. <span class="phrase-structure">På den anden side</span> kan en <span class="phrase-elaboration">ulempe</span> være, at det er meget ressourcekrævende. <span class="phrase-elaboration">Det vil sige</span>, at det koster mange penge og kræver meget personale at have fysiske support-funktioner til rådighed. Et andet problem kan være, at det måske bremser den generelle digitale udvikling, hvis man fastholder analoge systemer i for lang tid. <span class="phrase-structure">Så for at opsummere</span>, selvom det er dyrt, <span class="phrase-opinion">mener jeg</span>, at fordelene ved at sikre alle borgeres deltagelse i samfundet klart opvejer ulemperne. Det handler om værdighed og lighed.`,
                    english: `<span class="phrase-opinion">I think</span> that's a very relevant question. <span class="phrase-structure">On the one hand</span>, a clear <span class="phrase-elaboration">advantage</span> of offering more personal assistance is that it can counteract social and digital exclusion. <span class="phrase-consequence">This means</span> that elderly citizens can feel more secure and included in society. <span class="phrase-structure">Furthermore</span>, it ensures that all citizens, regardless of their digital skills, have access to important information and services from the public sector, which <span class="phrase-opinion">I believe</span> is a fundamental right. <span class="phrase-structure">On the other hand</span>, a <span class="phrase-elaboration">disadvantage</span> can be that it is very resource-intensive. <span class="phrase-elaboration">That is to say</span>, it costs a lot of money and requires a lot of staff to have physical support functions available. Another problem could be that it might slow down the general digital development if you maintain analog systems for too long. <span class="phrase-structure">So to summarize</span>, although it is expensive, <span class="phrase-opinion">I believe</span> that the advantages of ensuring all citizens' participation in society clearly outweigh the disadvantages. It's about dignity and equality.`
                }
            }
        ]
    },
    {
        tema: "Klima og Miljø",
        emne: "Forbrug og Bæredygtighed",
        description_da: "Dette scenarie handler om de daglige valg, forbrugere står overfor i supermarkedet, og dilemmaet mellem pris og bæredygtighed. Det rejser spørgsmål om, hvorvidt ansvaret for den grønne omstilling ligger hos forbrugeren eller producenten.",
        description_en: "This scenario is about the daily choices consumers face in the supermarket and the dilemma between price and sustainability. It raises questions about whether the responsibility for the green transition lies with the consumer or the producer.",
        questions: [
            { 
                id: "1A", hasAnswer: true, 
                questionText: "Mange mennesker vil gerne leve mere bæredygtigt, men vælger alligevel ofte de billigere og mindre miljøvenlige produkter i supermarkedet. Hvorfor tror du, de gør det?",
                englishQuestionText: "Many people want to live more sustainably, but still often choose the cheaper and less environmentally friendly products in the supermarket. Why do you think they do that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, den primære årsag er økonomi. <span class="phrase-reason">Det skyldes, at</span> mange familier har et stramt budget, og prisen er derfor den vigtigste faktor. <span class="phrase-structure">Derudover</span> kan det handle om vaner og bekvemmelighed. Man køber det, man altid har købt. <span class="phrase-opinion">Personligt tror jeg</span> også, at manglende gennemsigtighed kan spille en rolle; det er ikke altid let at se, hvilket produkt der er det mest bæredygtige.`,
                    english: `<span class="phrase-opinion">I think</span> the primary reason is economy. <span class="phrase-reason">This is because</span> many families have a tight budget, and the price is therefore the most important factor. <span class="phrase-structure">Furthermore</span>, it can be about habits and convenience. You buy what you've always bought. <span class="phrase-opinion">Personally, I also think</span> that a lack of transparency can play a role; it's not always easy to see which product is the most sustainable.`
                }
            },
            {
                id: "1B", hasAnswer: true, 
                questionText: "Kan der efter din mening være nogen problemer ved, at bæredygtige produkter ofte er dyrere end konventionelle produkter? Hvorfor?/Hvorfor ikke?",
                englishQuestionText: "In your opinion, can there be any problems with the fact that sustainable products are often more expensive than conventional products? Why?/Why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span> er det et stort problem, at bæredygtige produkter ofte er dyrere. <span class="phrase-reason">Grunden til det er, at</span> det skaber en social ulighed i, hvem der har mulighed for at træffe miljøvenlige valg. <span class="phrase-elaboration">Det vil sige</span>, at det at leve bæredygtigt kan blive et luksusgode, som kun folk med en god økonomi har råd til. <span class="phrase-consequence">Konsekvensen er</span>, at den grønne omstilling kan gå langsommere, <span class="phrase-reason">fordi</span> en stor del af befolkningen af økonomiske årsager er nødt til at fravælge de bæredygtige varer. <span class="phrase-structure">Derudover</span> kan det skabe en følelse af afmagt eller dårlig samvittighed hos dem, der gerne vil, men ikke har råd. <span class="phrase-structure">Så alt i alt mener jeg</span>, at prisforskellen er en alvorlig barriere for en bred folkelig opbakning til den grønne omstilling.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, it is a big problem that sustainable products are often more expensive. <span class="phrase-reason">The reason for that is that</span> it creates social inequality in who has the opportunity to make environmentally friendly choices. <span class="phrase-elaboration">That is to say</span>, living sustainably can become a luxury good that only people with good finances can afford. <span class="phrase-consequence">The consequence is</span> that the green transition may proceed more slowly, <span class="phrase-reason">because</span> a large part of the population is forced to opt out of sustainable goods for financial reasons. <span class="phrase-structure">Furthermore</span>, it can create a feeling of powerlessness or a bad conscience for those who want to, but cannot afford it. <span class="phrase-structure">So all in all, I believe</span> the price difference is a serious barrier to broad public support for the green transition.`
                }
            },
            { 
                id: "2", hasAnswer: true, 
                questionText: "Nogle mener, at supermarkeder og producenter har det største ansvar for at fremme bæredygtigt forbrug, mens andre mener, at ansvaret ligger hos den enkelte forbruger. Hvad mener du om den diskussion?",
                englishQuestionText: "Some believe that supermarkets and producers have the greatest responsibility for promoting sustainable consumption, while others believe the responsibility lies with the individual consumer. What is your opinion on that discussion?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, ansvaret er delt, men at producenterne og supermarkederne har det største ansvar. <span class="phrase-reason">Det er fordi</span>, de bestemmer, hvilke produkter der er tilgængelige, og hvordan de præsenteres. De kan gøre det lettere og billigere for forbrugerne at vælge bæredygtigt. <span class="phrase-structure">På den anden side</span> har forbrugerne selvfølgelig også et ansvar, <span class="phrase-reason">fordi</span> vores efterspørgsel påvirker, hvad der bliver produceret. Men valget skal være reelt og tilgængeligt for alle.`,
                    english: `<span class="phrase-opinion">I believe</span> the responsibility is shared, but that producers and supermarkets have the greatest responsibility. <span class="phrase-reason">This is because</span> they decide which products are available and how they are presented. They can make it easier and cheaper for consumers to choose sustainably. <span class="phrase-structure">On the other hand</span>, consumers of course also have a responsibility, <span class="phrase-reason">because</span> our demand influences what is produced. But the choice must be real and accessible to everyone.`
                }
            }
        ]
    },
    {
        tema: "Hverdagsliv og Relationer",
        emne: "Frivilligt Arbejde",
        description_da: "Her fokuseres der på den stærke tradition for frivilligt arbejde i Danmark. Scenariet undersøger motivationen bag frivillighed og diskuterer grænsen mellem frivillige opgaver og opgaver, som det offentlige bør varetage.",
        description_en: "The focus here is on the strong tradition of volunteer work in Denmark. The scenario examines the motivation behind volunteering and discusses the line between volunteer tasks and tasks that the public sector should handle.",
        questions: [
            { 
                id: "1A", hasAnswer: true, 
                questionText: "I Danmark deltager mange mennesker i frivilligt arbejde i deres fritid. Hvorfor tror du, de vælger at bruge deres tid på det, selvom de ikke får løn?",
                englishQuestionText: "In Denmark, many people participate in volunteer work in their spare time. Why do you think they choose to spend their time on it, even though they don't get paid?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det handler om at gøre en forskel og være en del af et fællesskab. <span class="phrase-reason">En af årsagerne er</span>, at det giver en følelse af mening at hjælpe andre eller støtte en sag, man brænder for. <span class="phrase-structure">Derudover</span> er det en god måde at møde nye mennesker og udvikle nye kompetencer på. <span class="phrase-elaboration">For eksempel</span> kan man få erfaring med projektledelse eller kommunikation.`,
                    english: `<span class="phrase-opinion">I think</span> it's about making a difference and being part of a community. <span class="phrase-reason">One of the reasons is</span> that it gives a sense of purpose to help others or support a cause you're passionate about. <span class="phrase-structure">Furthermore</span>, it's a good way to meet new people and develop new skills. <span class="phrase-elaboration">For example</span>, you can gain experience in project management or communication.`
                }
            },
            { 
                id: "1B", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for et lokalsamfund, at mange borgere engagerer sig i frivilligt arbejde?",
                englishQuestionText: "What do you think it means for a local community that many citizens get involved in volunteer work?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det betyder utroligt meget. <span class="phrase-consequence">Det har den effekt, at</span> det skaber et stærkere socialt sammenhold og et mere levende lokalsamfund. <span class="phrase-elaboration">Det vil sige</span>, at mange aktiviteter, især inden for sport og kultur, slet ikke ville eksistere uden frivillige. <span class="phrase-structure">Så alt i alt</span> er frivillighed limen, der binder mange lokalsamfund sammen.`,
                    english: `<span class="phrase-opinion">I believe</span> it means a great deal. <span class="phrase-consequence">It has the effect that</span> it creates stronger social cohesion and a more vibrant local community. <span class="phrase-elaboration">That is to say</span>, many activities, especially in sports and culture, would not exist at all without volunteers. <span class="phrase-structure">So all in all</span>, volunteering is the glue that holds many local communities together.`
                }
            },
            {
                id: "2", hasAnswer: true, 
                questionText: "Nogle mener, at visse opgaver, som i dag varetages af frivillige, i virkeligheden burde løses af det offentlige. Hvilke fordele og ulemper kan der være ved, at frivillige udfører disse opgaver i stedet for det offentlige?",
                englishQuestionText: "Some believe that certain tasks, which are currently handled by volunteers, should actually be solved by the public sector. What advantages and disadvantages can there be to having volunteers perform these tasks instead of the public sector?",
                answer: {
                    danish: `Det er en interessant diskussion med flere aspekter. <span class="phrase-structure">På den ene side</span> er en stor <span class="phrase-elaboration">fordel</span> ved at bruge frivillige, at de ofte bidrager med et personligt engagement og en entusiasme, som kan være svær at finde i et professionelt system. <span class="phrase-consequence">Det betyder</span>, at hjælpen kan føles mere personlig og mindre bureaukratisk. <span class="phrase-structure">Ydermere</span> styrker det fællesskabet og det civile samfund, når folk tager aktivt del i at løse lokale udfordringer. <span class="phrase-structure">På den anden side</span> er en klar <span class="phrase-elaboration">ulempe</span>, at kvaliteten og stabiliteten af hjælpen kan variere. Et problem kan være, at man ikke kan stille de samme krav til en frivillig som til en ansat. <span class="phrase-structure">Derudover</span> er der en risiko for, at det offentlige bruger frivillige som en undskyldning for at spare penge på velfærdsområder, som egentlig burde være en del af kernevelfærden. <span class="phrase-structure">Så for at opsummere mener jeg</span>, at frivillige er et fantastisk supplement, men de bør ikke erstatte professionelle medarbejdere i essentielle velfærdsopgaver. Den bedste løsning er nok et tæt samarbejde.`,
                    english: `That's an interesting discussion with several aspects. <span class="phrase-structure">On the one hand</span>, a big <span class="phrase-elaboration">advantage</span> of using volunteers is that they often contribute with a personal commitment and an enthusiasm that can be hard to find in a professional system. <span class="phrase-consequence">This means</span> that the help can feel more personal and less bureaucratic. <span class="phrase-structure">Furthermore</span>, it strengthens the community and civil society when people take an active part in solving local challenges. <span class="phrase-structure">On the other hand</span>, a clear <span class="phrase-elaboration">disadvantage</span> is that the quality and stability of the help can vary. A problem can be that you cannot make the same demands of a volunteer as of an employee. <span class="phrase-structure">In addition</span>, there is a risk that the public sector uses volunteers as an excuse to save money in welfare areas that should actually be part of the core welfare service. <span class="phrase-structure">So to summarize, I believe</span> that volunteers are a fantastic supplement, but they should not replace professional employees in essential welfare tasks. The best solution is probably a close collaboration.`
                }
            }
        ]
    },
    {
        tema: "Uddannelse og Arbejde",
        emne: "Uddannelsespres blandt unge",
        description_da: "Dette scenarie belyser det stigende pres, mange unge oplever i forbindelse med uddannelse. Det diskuterer årsagerne til presset, dets konsekvenser for de unges mentale helbred, og værdien af at tage et sabbatår som en mulig løsning.",
        description_en: "This scenario highlights the increasing pressure many young people experience in relation to their education. It discusses the reasons for this pressure, its consequences for young people's mental health, and the value of taking a gap year as a possible solution.",
        questions: [
            { 
                id: "1A", hasAnswer: true, 
                questionText: "Mange unge i dag oplever et stort pres for at klare sig godt i gymnasiet og hurtigt vælge den 'rigtige' videregående uddannelse. Hvorfor tror du, dette pres er blevet så stort?",
                englishQuestionText: "Many young people today experience great pressure to do well in high school and quickly choose the 'right' higher education. Why do you think this pressure has become so great?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det skyldes en kombination af samfundets forventninger og de unges egne ambitioner. <span class="phrase-structure">Desuden</span> er der et stort fokus på karakterer og adgangskrav, hvilket skaber en konkurrencementalitet. Sociale medier spiller også en rolle, <span class="phrase-reason">fordi</span> man konstant ser andres succes, hvilket kan få en til at føle sig utilstrækkelig.`,
                    english: `<span class="phrase-opinion">I think</span> it's due to a combination of societal expectations and the young people's own ambitions. <span class="phrase-structure">Furthermore</span>, there is a strong focus on grades and admission requirements, which creates a competitive mentality. Social media also plays a role, <span class="phrase-reason">because</span> you constantly see others' success, which can make you feel inadequate.`
                }
            },
            { 
                id: "1B", hasAnswer: true, 
                questionText: "Hvad tror du, det betyder for de unges mentale sundhed og deres motivation for at lære, at de oplever dette konstante pres?",
                englishQuestionText: "What do you think it means for the mental health and learning motivation of young people that they experience this constant pressure?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det har alvorlige negative konsekvenser. <span class="phrase-consequence">Det kan føre til</span> stress, angst og udbrændthed. Når det gælder motivationen, kan presset fjerne glæden ved at lære. <span class="phrase-elaboration">Med andre ord</span> begynder uddannelse at handle mere om at præstere end om at tilegne sig viden, hvilket er meget uheldigt.`,
                    english: `<span class="phrase-opinion">I believe</span> it has serious negative consequences. <span class="phrase-consequence">It can lead to</span> stress, anxiety, and burnout. When it comes to motivation, the pressure can remove the joy of learning. <span class="phrase-elaboration">In other words</span>, education starts to be more about performing than about acquiring knowledge, which is very unfortunate.`
                }
            },
            {
                id: "2", hasAnswer: true, 
                questionText: "Nogle unge vælger at tage et eller flere sabbatår efter gymnasiet for at arbejde, rejse eller finde ud af, hvad de vil. Hvilke fordele og ulemper mener du, der kan være ved at tage et sabbatår, før man starter på en uddannelse?",
                englishQuestionText: "Some young people choose to take one or more gap years after high school to work, travel, or figure out what they want. What advantages and disadvantages do you think there can be to taking a gap year before starting an education?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, der er både klare <span class="phrase-elaboration">fordele</span> og potentielle <span class="phrase-elaboration">ulemper</span> ved at tage et sabbatår. En af de største fordele er, at det giver de unge tid til at modnes og få et afbræk fra skolesystemet. <span class="phrase-consequence">Det kan føre til</span>, at de træffer et mere gennemtænkt og motiveret uddannelsesvalg, når de endelig starter. <span class="phrase-elaboration">For eksempel</span> kan erhvervserfaring fra et job give dem en bedre idé om, hvad de er interesserede i. En <span class="phrase-elaboration">ulempe</span> kan <span class="phrase-structure">dog</span> være, at det forsinker deres indtræden på arbejdsmarkedet. <span class="phrase-elaboration">Med andre ord</span> bliver de senere færdige med deres uddannelse og begynder senere at tjene penge og betale skat. Et andet problem kan være, at nogle unge har svært ved at komme i gang med at studere igen, efter de har vænnet sig til at have et job og en fast indkomst. <span class="phrase-structure">Så alt i alt tror jeg</span>, at fordelene ofte opvejer ulemperne, især i et samfund med et højt uddannelsespres. Et sabbatår kan være en sund investering i den unges fremtidige trivsel og karriere.`,
                    english: `<span class="phrase-opinion">I believe</span> there are both clear <span class="phrase-elaboration">advantages</span> and potential <span class="phrase-elaboration">disadvantages</span> to taking a gap year. One of the biggest advantages is that it gives young people time to mature and get a break from the school system. <span class="phrase-consequence">This can lead to</span> them making a more well-considered and motivated educational choice when they finally start. <span class="phrase-elaboration">For example</span>, work experience from a job can give them a better idea of what they are interested in. A <span class="phrase-elaboration">disadvantage</span>, <span class="phrase-structure">however</span>, can be that it delays their entry into the labor market. <span class="phrase-elaboration">In other words</span>, they finish their education later and start earning money and paying taxes later. Another problem can be that some young people find it difficult to start studying again after they have gotten used to having a job and a steady income. <span class="phrase-structure">So all in all, I think</span> the advantages often outweigh the disadvantages, especially in a society with high educational pressure. A gap year can be a healthy investment in the young person's future well-being and career.`
                }
            }
        ]
    },
    {
        tema: "Sundhed og Livsstil",
        emne: "Færdigretter vs. Hjemmelavet mad",
        description_da: "Dette scenarie stiller skarpt på det moderne dilemma mellem hurtige, nemme færdigretter og den tidskrævende, men ofte sundere, hjemmelavede mad. Det undersøger årsagerne til folks madvalg og konsekvenserne for sundhed og familieliv.",
        description_en: "This scenario focuses on the modern dilemma between quick, easy ready-made meals and time-consuming, but often healthier, homemade food. It examines the reasons for people's food choices and the consequences for health and family life.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Mange mennesker, især børnefamilier, køber ofte færdigretter eller take-away, selvom de ved, at hjemmelavet mad generelt er sundere. Hvorfor tror du, de gør det?",
                englishQuestionText: "Many people, especially families with children, often buy ready-made meals or take-away, even though they know that homemade food is generally healthier. Why do you think they do it?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, den primære årsag er tidsmangel. I en travl hverdag med arbejde, skole og fritidsaktiviteter kan det virke uoverskueligt også at skulle lave mad fra bunden. <span class="phrase-reason">Det skyldes, at</span> færdigretter tilbyder en nem og hurtig løsning. <span class="phrase-structure">Desuden</span> kan det for nogle også handle om manglende energi eller inspiration til madlavning efter en lang dag.`,
                    english: `<span class="phrase-opinion">I think</span> the primary reason is lack of time. In a busy daily life with work, school, and leisure activities, it can seem overwhelming to also have to cook from scratch. <span class="phrase-reason">This is because</span> ready-made meals offer an easy and quick solution. <span class="phrase-structure">Furthermore</span>, for some it may also be about a lack of energy or inspiration for cooking after a long day.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for familielivet og børns forhold til mad, at man ofte spiser færdigretter?",
                englishQuestionText: "What do you think it means for family life and children's relationship with food that people often eat ready-made meals?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det kan have flere konsekvenser. <span class="phrase-consequence">En konsekvens kan være</span>, at man mister det sociale samvær omkring madlavningen. <span class="phrase-elaboration">Det vil sige</span>, at den værdifulde tid, hvor familien er sammen i køkkenet, forsvinder. For børns forhold til mad <span class="phrase-consequence">kan det betyde</span>, at de ikke lærer, hvor maden kommer fra, eller hvordan man tilbereder den, hvilket kan påvirke deres madvaner som voksne.`,
                    english: `<span class="phrase-opinion">I believe</span> it can have several consequences. <span class="phrase-consequence">One consequence can be</span> that you lose the social interaction around cooking. <span class="phrase-elaboration">That is to say</span>, the valuable time where the family is together in the kitchen disappears. For children's relationship with food, <span class="phrase-consequence">it can mean</span> that they don't learn where food comes from or how to prepare it, which can affect their eating habits as adults.`
                }
            },
            {
                id: "2", hasAnswer: true,
                questionText: "Nogle mener, at supermarkeder og producenter har det største ansvar for at fremme bæredygtigt forbrug, mens andre mener, at ansvaret ligger hos den enkelte forbruger. Hvad mener du om den diskussion?",
                englishQuestionText: "Some believe that supermarkets and producers have the greatest responsibility for promoting sustainable consumption, while others believe the responsibility lies with the individual consumer. What is your opinion on that discussion?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, ansvaret er delt, men at producenterne og supermarkederne har det største ansvar. <span class="phrase-reason">Det er fordi</span>, de bestemmer, hvilke produkter der er tilgængelige, og hvordan de præsenteres. De kan gøre det lettere og billigere for forbrugerne at vælge bæredygtigt. <span class="phrase-structure">På den anden side</span> har forbrugerne selvfølgelig også et ansvar, <span class="phrase-reason">fordi</span> vores efterspørgsel påvirker, hvad der bliver produceret. Men valget skal være reelt og tilgængeligt for alle.`,
                    english: `<span class="phrase-opinion">I believe</span> the responsibility is shared, but that producers and supermarkets have the greatest responsibility. <span class="phrase-reason">This is because</span> they decide which products are available and how they are presented. They can make it easier and cheaper for consumers to choose sustainably. <span class="phrase-structure">On the other hand</span>, consumers of course also have a responsibility, <span class="phrase-reason">because</span> our demand influences what is produced. But the choice must be real and accessible to everyone.`
                }
            }
        ]
    },
    {
        tema: "Arbejde og Arbejdsmarkedet",
        emne: "Fredagsbar og Socialt Samvær",
        description_da: "Dette tema undersøger den danske arbejdspladskultur, specifikt fænomenet 'fredagsbar'. Det handler om vigtigheden af det uformelle sociale samvær med kolleger, og de potentielle problemer, der kan opstå for dem, der ikke deltager.",
        description_en: "This theme explores Danish workplace culture, specifically the phenomenon of 'fredagsbar' (Friday bar). It deals with the importance of informal social interaction with colleagues and the potential problems that can arise for those who do not participate.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "På mange danske arbejdspladser er der tradition for at drikke en øl eller et glas vin med kollegerne om fredagen. Hvorfor tror du, denne tradition er så udbredt?",
                englishQuestionText: "In many Danish workplaces, there is a tradition of drinking a beer or a glass of wine with colleagues on Fridays. Why do you think this tradition is so widespread?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det er en måde at markere ugens afslutning og starte weekenden på en hyggelig og uformel måde. <span class="phrase-reason">Det er fordi</span>, det styrker de sociale relationer og teamfølelsen, når man mødes uden for de normale arbejdsrammer. Det er en vigtig del af den danske arbejdskultur, som handler om mere end bare arbejde.`,
                    english: `<span class="phrase-opinion">I think</span> it's a way to mark the end of the week and start the weekend in a cozy and informal way. <span class="phrase-reason">This is because</span> it strengthens social relationships and team spirit when you meet outside the normal work context. It's an important part of Danish work culture, which is about more than just work.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Kan der efter din mening være nogen problemer ved, at man ikke deltager i det sociale samvær som fx fredagsbar? Hvorfor/Hvorfor ikke?",
                englishQuestionText: "In your opinion, can there be any problems with not participating in social gatherings like the Friday bar? Why/why not?",
                answer: {
                    danish: `Ja, <span class="phrase-opinion">efter min mening</span kan der være problemer. <span class="phrase-consequence">En konsekvens kan være</span>, at man går glip af vigtig uformel information og de beslutninger, der måske tages i en mere afslappet atmosfære. <span class="phrase-structure">Desuden</span> risikerer man at blive set som en, der ikke er en del af holdet, hvilket kan påvirke ens relationer til kollegerne og måske endda ens karrieremuligheder.`,
                    english: `Yes, <span class="phrase-opinion">in my opinion</span>, there can be problems. <span class="phrase-consequence">One consequence can be</span> that you miss out on important informal information and the decisions that might be made in a more relaxed atmosphere. <span class="phrase-structure">Furthermore</span>, you risk being seen as someone who is not part of the team, which can affect your relationships with colleagues and perhaps even your career opportunities.`
                }
            }
        ]
    },
    {
        tema: "Medier, Kultur og Teknologi",
        emne: "Sociale Medier og Venskaber",
        description_da: "Dette scenarie handler om, hvordan sociale medier påvirker vores opfattelse af os selv og vores relationer. Det diskuterer forskellen på online venskaber og fysiske venskaber samt presset for at præsentere et 'perfekt' liv online.",
        description_en: "This scenario is about how social media affects our perception of ourselves and our relationships. It discusses the difference between online friendships and physical friendships, as well as the pressure to present a 'perfect' life online.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Mange, især unge, bruger meget tid på sociale medier som Instagram og TikTok. Hvorfor tror du, disse platforme er så populære?",
                englishQuestionText: "Many people, especially the young, spend a lot of time on social media like Instagram and TikTok. Why do you think these platforms are so popular?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, deres popularitet skyldes, at de tilbyder hurtig underholdning og en følelse af social forbindelse. <span class="phrase-reason">En årsag er</span>, at man kan følge med i sine venners liv og få inspiration fra hele verden. <span class="phrase-structure">Desuden</span> giver de en platform, hvor man kan udtrykke sig kreativt og få anerkendelse i form af 'likes' og kommentarer.`,
                    english: `<span class="phrase-opinion">I think</span> their popularity is due to them offering quick entertainment and a sense of social connection. <span class="phrase-reason">One reason is</span> that you can keep up with your friends' lives and get inspiration from all over the world. <span class="phrase-structure">Furthermore</span>, they provide a platform where you can express yourself creatively and receive recognition in the form of 'likes' and comments.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for folks selvværd, at de konstant ser billeder af andres tilsyneladende perfekte liv på sociale medier?",
                englishQuestionText: "What do you think it means for people's self-esteem that they constantly see pictures of others' seemingly perfect lives on social media?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det kan være meget skadeligt. <span class="phrase-consequence">Konsekvensen er</span>, at man let kommer til at sammenligne sit eget normale liv med andres polerede og redigerede virkelighed. <span class="phrase-consequence">Dette kan føre til</span> følelser af utilstrækkelighed, misundelse og lavt selvværd, <span class="phrase-reason">fordi</span> man glemmer, at det, man ser, kun er et lille, perfekt udsnit af virkeligheden.`,
                    english: `<span class="phrase-opinion">I believe</span> it can be very harmful. <span class="phrase-consequence">The consequence is</span> that you easily end up comparing your own normal life with others' polished and edited reality. <span class="phrase-consequence">This can lead to</span> feelings of inadequacy, envy, and low self-esteem, <span class="phrase-reason">because</span> you forget that what you see is only a small, perfect snapshot of reality.`
                }
            },
            {
                id: "2", hasAnswer: true,
                questionText: "Nogle siger, at venskaber på sociale medier ikke er 'rigtige' venskaber. Hvilke fordele og ulemper ser du ved at have mange online venner i forhold til at have få, nære venner, man mødes med fysisk?",
                englishQuestionText: "Some say that friendships on social media are not 'real' friendships. What advantages and disadvantages do you see in having many online friends compared to having a few, close friends you meet physically?",
                answer: {
                    danish: `En <span class="phrase-elaboration">fordel</span> ved online venner er, at man kan have et stort netværk og finde folk med meget specifikke fælles interesser fra hele verden. <span class="phrase-structure">På den anden side</span> er en klar <span class="phrase-elaboration">ulempe</span>, at relationerne ofte er overfladiske. Med nære, fysiske venner har man en dybere forbindelse og den støtte, man har brug for, når livet er svært. <span class="phrase-opinion">Jeg mener</span>, at begge dele kan have værdi, men de kan ikke erstatte hinanden.`,
                    english: `An <span class="phrase-elaboration">advantage</span> of online friends is that you can have a large network and find people with very specific common interests from all over the world. <span class="phrase-structure">On the other hand</span>, a clear <span class="phrase-elaboration">disadvantage</span> is that the relationships are often superficial. With close, physical friends, you have a deeper connection and the support you need when life is difficult. <span class="phrase-opinion">I believe</span> that both can have value, but they cannot replace each other.`
                }
            }
        ]
    },
    {
        tema: "Arbejde og Arbejdsmarkedet",
        emne: "Den Danske Model og Flad Struktur",
        description_da: "Temaet udforsker den særlige danske arbejdsmarkedsmodel med fokus på flad ledelsesstruktur, teamwork og den uformelle tone mellem ledere og medarbejdere. Det diskuterer fordele og potentielle udfordringer, især for udlændinge.",
        description_en: "The theme explores the unique Danish labor market model, focusing on flat management structures, teamwork, and the informal tone between managers and employees. It discusses the advantages and potential challenges, especially for foreigners.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "På mange danske arbejdspladser er der en meget uformel tone, og medarbejdere arbejder ofte i teams med stort ansvar. Hvorfor tror du, denne kultur eksisterer i Danmark?",
                englishQuestionText: "In many Danish workplaces, there is a very informal tone, and employees often work in teams with a great deal of responsibility. Why do you think this culture exists in Denmark?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det hænger sammen med en grundlæggende dansk værdi om lighed. <span class="phrase-reason">Grunden til det er</span>, at man tror på, at de bedste resultater opnås, når alle føler sig værdsat og tør byde ind med ideer. Den flade struktur og tilliden til medarbejderne fremmer innovation og arbejdsglæde.`,
                    english: `<span class="phrase-opinion">I think</span> it's connected to a fundamental Danish value of equality. <span class="phrase-reason">The reason for this is</span> that it is believed that the best results are achieved when everyone feels valued and dares to contribute with ideas. The flat structure and trust in employees promote innovation and job satisfaction.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for arbejdsglæden, at man har stor indflydelse på sit eget arbejde?",
                englishQuestionText: "What do you think it means for job satisfaction that one has a great deal of influence over one's own work?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det betyder utroligt meget. <span class="phrase-consequence">Det har den effekt, at</span> medarbejderne føler et større ejerskab og ansvar for deres opgaver. <span class="phrase-consequence">Dette kan føre til</span> højere motivation og engagement, <span class="phrase-reason">fordi</span> man føler, at ens bidrag gør en forskel. Det skaber en mere meningsfuld arbejdsdag.`,
                    english: `<span class="phrase-opinion">I believe</span> it means a great deal. <span class="phrase-consequence">It has the effect that</span> employees feel a greater sense of ownership and responsibility for their tasks. <span class="phrase-consequence">This can lead to</span> higher motivation and engagement, <span class="phrase-reason">because</span> you feel that your contribution makes a difference. It creates a more meaningful workday.`
                }
            },
            {
                id: "2", hasAnswer: true,
                questionText: "Kan der være ulemper eller udfordringer ved den flade ledelsesstruktur, især for en person fra en anden kultur? Hvorfor/Hvorfor ikke?",
                englishQuestionText: "Can there be disadvantages or challenges to the flat management structure, especially for a person from another culture? Why/why not?",
                answer: {
                    danish: `Ja, helt sikkert. <span class="phrase-complexity">Det er et komplekst emne</span>. En <span class="phrase-elaboration">ulempe</span> for en person fra en mere hierarkisk kultur kan være, at ansvarsfordelingen virker uklar. <span class="phrase-elaboration">Det vil sige</span>, at man kan være usikker på, hvem der træffer den endelige beslutning. <span class="phrase-structure">Desuden</span> kan den direkte og uformelle tone opfattes som mangel på respekt. <span class="phrase-structure">Så alt i alt</span> kræver det en tilvænningsperiode at forstå de uskrevne regler.`,
                    english: `Yes, definitely. <span class="phrase-complexity">It's a complex topic</span>. A <span class="phrase-elaboration">disadvantage</span> for a person from a more hierarchical culture can be that the distribution of responsibility seems unclear. <span class="phrase-elaboration">That is to say</span>, one might be unsure about who makes the final decision. <span class="phrase-structure">Furthermore</span>, the direct and informal tone can be perceived as a lack of respect. <span class="phrase-structure">So all in all</span>, it requires an adjustment period to understand the unwritten rules.`
                }
            }
        ]
    },
    {
        tema: "Integration og Sprog",
        emne: "Sprogets Betydning",
        description_da: "Dette scenarie fokuserer på vigtigheden af at lære dansk for at kunne integrere sig socialt og professionelt i Danmark. Det undersøger udfordringerne ved sproglæring og diskuterer, hvorvidt det er nok at kunne engelsk på arbejdsmarkedet.",
        description_en: "This scenario focuses on the importance of learning Danish for social and professional integration in Denmark. It examines the challenges of language learning and discusses whether speaking English is sufficient in the job market.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "Mange udlændinge, der kommer til Danmark for at arbejde, oplever, at det er svært at lære dansk, fordi danskerne hurtigt slår over i engelsk. Hvorfor tror du, danskerne gør det?",
                englishQuestionText: "Many foreigners who come to Denmark to work find it difficult to learn Danish because Danes quickly switch to English. Why do you think Danes do that?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det ofte er ment som en venlig gestus. <span class="phrase-reason">Grunden til det er</span>, at danskerne gerne vil være hjælpsomme og sikre, at kommunikationen er så let som muligt. <span class="phrase-structure">På den anden side</span> forstår de måske ikke, at det gør det sværere for udlændinge at praktisere deres dansk. Det kan også handle om utålmodighed.`,
                    english: `<span class="phrase-opinion">I think</span> it is often meant as a friendly gesture. <span class="phrase-reason">The reason for this is</span> that Danes want to be helpful and ensure that communication is as easy as possible. <span class="phrase-structure">On the other hand</span>, they may not understand that it makes it harder for foreigners to practice their Danish. It can also be about impatience.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for en udlændings sociale liv og integration, at de lærer at tale dansk?",
                englishQuestionText: "What do you think it means for a foreigner's social life and integration that they learn to speak Danish?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det er altafgørende. At tale dansk er nøglen til at forstå den danske kultur og humor. <span class="phrase-consequence">Det betyder</span>, at man kan deltage i samtaler i frokostpausen, til familiefester og i foreningslivet. <span class="phrase-structure">Så alt i alt</span> går man fra at være en observatør til at være en deltager i samfundet.`,
                    english: `<span class="phrase-opinion">I believe</span> it is absolutely crucial. Speaking Danish is the key to understanding Danish culture and humor. <span class="phrase-consequence">It means</span> that you can participate in conversations during the lunch break, at family parties, and in associations. <span class="phrase-structure">So all in all</span>, you go from being an observer to being a participant in society.`
                }
            },
            {
                id: "2", hasAnswer: true,
                questionText: "På nogle internationale arbejdspladser i Danmark er arbejdssproget engelsk. Mener du, det er et problem, hvis de udenlandske medarbejdere på disse arbejdspladser ikke lærer dansk? Hvorfor/Hvorfor ikke?",
                englishQuestionText: "In some international workplaces in Denmark, the working language is English. Do you think it is a problem if the foreign employees in these workplaces do not learn Danish? Why/why not?",
                answer: {
                    danish: `Det er et <span class="phrase-complexity">komplekst spørgsmål</span>. Professionelt er det måske ikke et problem, hvis alt arbejde kan klares på engelsk. Men <span class="phrase-opinion">efter min mening</span> bliver det et problem for den enkeltes integration i det danske samfund uden for arbejdet. <span class="phrase-elaboration">En ulempe</span> er, at de kan få svært ved at opbygge et socialt netværk uden for arbejdspladsen og forstå det samfund, de bor i. <span class="phrase-consequence">Konsekvensen er</span>, at de måske aldrig rigtig føler sig hjemme i Danmark.`,
                    english: `It's a <span class="phrase-complexity">complex question</span>. Professionally, it might not be a problem if all work can be done in English. But <span class="phrase-opinion">in my opinion</span>, it becomes a problem for the individual's integration into Danish society outside of work. <span class="phrase-elaboration">A disadvantage</span> is that they may find it difficult to build a social network outside the workplace and understand the society they live in. <span class="phrase-consequence">The consequence is</span> that they may never truly feel at home in Denmark.`
                }
            }
        ]
    },
    {
        tema: "Bæredygtighed og Byudvikling",
        emne: "Byhaver og Fællesskab",
        description_da: "Dette tema omhandler den voksende tendens med byhaver og urban farming i danske byer. Det undersøger, hvorfor folk vælger at dyrke deres egne grøntsager i fællesskab, og hvilken betydning det har for miljøet og det sociale liv i byen.",
        description_en: "This theme deals with the growing trend of urban gardens and urban farming in Danish cities. It examines why people choose to grow their own vegetables together and what significance it has for the environment and social life in the city.",
        questions: [
            {
                id: "1A", hasAnswer: true,
                questionText: "I mange byer ser man flere og flere byhaver, hvor beboere i fællesskab dyrker grøntsager og blomster på små arealer. Hvorfor tror du, denne tendens er opstået?",
                englishQuestionText: "In many cities, you see more and more urban gardens where residents collectively grow vegetables and flowers in small areas. Why do you think this trend has emerged?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg tror</span>, det skyldes et ønske om at komme tættere på naturen og vide, hvor ens mad kommer fra. <span class="phrase-reason">En anden årsag er</span> behovet for stærkere lokale fællesskaber i en travl og ofte anonym by. Byhaven bliver et socialt mødested på tværs af generationer.`,
                    english: `<span class="phrase-opinion">I think</span> it stems from a desire to get closer to nature and to know where one's food comes from. <span class="phrase-reason">Another reason is</span> the need for stronger local communities in a busy and often anonymous city. The urban garden becomes a social meeting place across generations.`
                }
            },
            {
                id: "1B", hasAnswer: true,
                questionText: "Hvad tror du, det betyder for beboerne i et område at have en fælles byhave?",
                englishQuestionText: "What do you think it means for the residents of an area to have a communal urban garden?",
                answer: {
                    danish: `<span class="phrase-opinion">Jeg mener</span>, det har stor betydning for både det sociale og det mentale helbred. <span class="phrase-consequence">Det har den effekt, at</span> folk lærer deres naboer at kende, hvilket øger trygheden og sammenholdet. <span class="phrase-structure">Desuden</span> giver havearbejde en mulighed for at slappe af, få frisk luft og motion, hvilket er godt mod stress.`,
                    english: `<span class="phrase-opinion">I believe</span> it is very significant for both social and mental health. <span class="phrase-consequence">It has the effect that</span> people get to know their neighbors, which increases security and cohesion. <span class="phrase-structure">Furthermore</span>, gardening provides an opportunity to relax, get fresh air, and exercise, which is good against stress.`
                }
            },
            {
                id: "2", hasAnswer: true,
                questionText: "Nogle mener, at byhaver er en vigtig del af den grønne omstilling i byerne. Andre mener, at det mest er et hyggeligt hobbyprojekt med lille effekt. Hvad mener du?",
                englishQuestionText: "Some argue that urban gardens are an important part of the green transition in cities. Others believe it's mostly a cozy hobby project with little effect. What is your opinion?",
                answer: {
                    danish: `<span class="phrase-complexity">Det er en interessant diskussion</span>. <span class="phrase-structure">På den ene side</span> er den reelle mængde mad, der produceres, selvfølgelig lille i det store billede. <span class="phrase-structure">På den anden side</span> <span class="phrase-opinion">mener jeg</span>, at den pædagogiske værdi er enorm. <span class="phrase-elaboration">Det vil sige</span>, at byhaver skaber bevidsthed om bæredygtighed, økologi og madspild. <span class="phrase-consequence">Konsekvensen er</span>, at folk tager denne viden med sig, når de handler i supermarkedet. <span class="phrase-structure">Så alt i alt</span> er effekten måske større, end man umiddelbart tror.`,
                    english: `<span class="phrase-complexity">That is an interesting discussion</span>. <span class="phrase-structure">On the one hand</span>, the actual amount of food produced is, of course, small in the grand scheme of things. <span class="phrase-structure">On the other hand</span>, <span class="phrase-opinion">I believe</span> that the educational value is enormous. <span class="phrase-elaboration">That is to say</span>, urban gardens create awareness about sustainability, ecology, and food waste. <span class="phrase-consequence">The consequence is</span> that people take this knowledge with them when they shop at the supermarket. <span class="phrase-structure">So all in all</span>, the effect may be greater than one might initially think.`
                }
            }
        ]
    }        ];

// Global audio player
let currentAudio = null;
let currentTrackInfo = '';
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');
const currentTrackEl = document.getElementById('current-track');
const speedControl = document.getElementById('speed-control');

let currentScenarioIndex = 0;
const container = document.getElementById('scenario-container');
const counterEl = document.getElementById('scenario-counter');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Audio playback functionality
function playAudio(audioFile, trackInfo = '') {
    // Stop current audio if playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    currentAudio = new Audio(audioFile);
    currentTrackInfo = trackInfo || audioFile.split('/').pop().replace('.mp3', '');
    
    // Set initial playback rate
    currentAudio.playbackRate = parseFloat(speedControl.value);
    
    // Show audio player
    audioPlayer.classList.remove('hidden');
    currentTrackEl.textContent = currentTrackInfo;
    
    // Update UI to playing state
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    
    // Set up event listeners
    currentAudio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(currentAudio.duration);
    });
    
    currentAudio.addEventListener('timeupdate', () => {
        const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressBar.style.width = progress + '%';
        currentTimeEl.textContent = formatTime(currentAudio.currentTime);
    });
    
    currentAudio.addEventListener('ended', () => {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    });
    
    currentAudio.play().catch(error => {
        console.warn(`Could not play audio file: ${audioFile}`, error);
        alert(`Audio file not found: ${audioFile}\nPlease ensure the audio file exists in the same directory as this HTML file.`);
        audioPlayer.classList.add('hidden');
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function togglePlayPause() {
    if (!currentAudio) return;
    
    if (currentAudio.paused) {
        currentAudio.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        currentAudio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

function changeSpeed() {
    if (currentAudio) {
        currentAudio.playbackRate = parseFloat(speedControl.value);
    }
}function generateAudioFilename(scenarioIndex, questionId, type) {
    // Generate standardized filename: audio_files/scenario_{index}_{questionId}_{type}.mp3
    // Example: audio_files/scenario_0_1A_question.mp3, audio_files/scenario_0_1A_answer.mp3
    return `audio_files/scenario_${scenarioIndex}_${questionId}_${type}.mp3`;
}

function renderCurrentScenario() {
    container.innerHTML = '';
    const scenario = scenarios[currentScenarioIndex];
    const scenarioEl = document.createElement('div');
    scenarioEl.className = 'bg-white rounded-xl shadow-md overflow-hidden';            let questionsHtml = '';
    scenario.questions.forEach(q => {
        // Generate audio filenames
        const questionAudioFile = generateAudioFilename(currentScenarioIndex, q.id, 'question');
        const answerAudioFile = generateAudioFilename(currentScenarioIndex, q.id, 'answer');
            const questionAudioButton = `
            <button class="audio-btn" onclick="playAudio('${questionAudioFile}', 'Spørgsmål ${q.id}')" title="Afspil spørgsmål">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h1.5L16 18V6l-5.5 3H9z"></path>
                </svg>
                🔊
            </button>`;
        
        const translationButtonHtml = `
            <button class="translation-btn mt-4 flex items-center text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors">
                <svg class="w-3 h-3 mr-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                Vis / Skjul Oversættelse
            </button>
            <div class="accordion-content prose prose-slate max-w-none mt-2 text-slate-500 italic">
                <p class="pl-5">${q.englishQuestionText}</p>
            </div>`;                const answerAudioButton = q.hasAnswer ? `
            <button class="audio-btn" onclick="playAudio('${answerAudioFile}', 'Svar ${q.id}')" title="Afspil svar">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h1.5L16 18V6l-5.5 3H9z"></path>
                </svg>
                🔊
            </button>` : '';

        const answerButtonHtml = q.hasAnswer ? `
            <button class="answer-btn mt-2 flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                <svg class="w-4 h-4 mr-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                Vis / Skjul Svar
            </button>
            <div class="accordion-content prose prose-slate max-w-none mt-4 text-slate-700">
                <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 class="text-base font-bold text-slate-900 flex items-center">
                        Model Svar (Dansk)
                        ${answerAudioButton}
                    </h4>
                    <p>${q.answer.danish}</p>
                    <h4 class="text-base font-bold text-slate-900">Model Answer (English)</h4>
                    <p>${q.answer.english}</p>
                </div>
            </div>
        ` : '';

        questionsHtml += `
            <div class="question-block border-t border-slate-200">
                <div class="p-4 md:p-6">
                    <div class="inline-block bg-slate-200 text-slate-700 text-xs font-bold mb-2 px-2 py-1 rounded-full">Spørgsmål ${q.id}</div>
                    <p class="font-medium text-slate-800 flex items-center">
                        ${q.questionText}
                        ${questionAudioButton}
                    </p>
                    ${translationButtonHtml}
                    ${answerButtonHtml}
                </div>
            </div>
        `;
    });

    scenarioEl.innerHTML = `
        <div class="p-4 md:p-6 bg-slate-100">
            <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">${scenario.tema}</p>
            <h2 class="text-xl md:text-2xl font-bold text-slate-900 mt-1">${scenario.emne}</h2>
            <div class="mt-4 text-slate-600 space-y-2">
                <p><strong>Beskrivelse:</strong> ${scenario.description_da}</p>
                <p><strong>Description:</strong> ${scenario.description_en}</p>
            </div>
        </div>
        <div>
            ${questionsHtml}
        </div>
    `;
    container.appendChild(scenarioEl);
    updateNav();
}

function updateNav() {
    counterEl.textContent = `Scenarie ${currentScenarioIndex + 1} af ${scenarios.length}`;
    prevBtn.disabled = currentScenarioIndex === 0;
    nextBtn.disabled = currentScenarioIndex === scenarios.length - 1;
}        function setupEventListeners() {
    // Audio player controls
    playPauseBtn.addEventListener('click', togglePlayPause);
    speedControl.addEventListener('change', changeSpeed);
    
    container.addEventListener('click', function(e) {
        const button = e.target.closest('button');
        if (!button) return;

        const content = button.nextElementSibling;
        if (content && content.classList.contains('accordion-content')) {
            const icon = button.querySelector('svg');
            content.classList.toggle('open');
            if (icon) {
                icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentScenarioIndex < scenarios.length - 1) {
            currentScenarioIndex++;
            renderCurrentScenario();
            container.scrollTop = 0;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentScenarioIndex > 0) {
            currentScenarioIndex--;
            renderCurrentScenario();
            container.scrollTop = 0;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCurrentScenario();
    setupEventListeners();
});
