import "./oldGlobal.css";
import Script from "next/script";

export default function OldPage() {
    return (
        <>
        <div className="content-box">
            <h1>A Guide to Tristan of Whitewood, The Silver Guard and The Town Of Whitewood v2.2</h1>
            <ol>
                <li><a href='#whitewood'>Whitewood</a></li>
                <ol>
                    <li><a href='#whitewoodBasic'>Basic Information</a></li>
                    <li><a href='#whitewoodHistory'>History</a></li>
                    <ol>
                        <li><a href='#whitewoodOrigins'>Origins</a></li>
                        <li><a href='#whitewoodDevelopment'>Development</a></li>
                        <li><a href='#whitewoodModernDay'>Modern Day</a></li>
                    </ol>
                    <li><a href='#residents'>Residents</a></li>
                </ol>

                <li><a href='#silverGuard'>The Silver Guard</a></li>
                <ol>
                    <li><a href='#silverGuardBasic'>Basic Information</a></li>
                    <li><a href='#silverGuardHistory'>History</a></li>
                    <ol>
                        <li><a href='#silverGuardOrigins'>Origins</a></li>
                        <li><a href='#takeover'>Whitewoods Takeover</a></li>
                        <li><a href='#silverGuardModernDay'>Modern Day</a></li>
                    </ol>
                    <li><a href='#hierarchy'>Hierarchy</a></li>
                    <ol>
                        <li><a href='#structure'>Structure</a></li>
                        <li><a href='#warBands'>War Bands</a></li>
                        <ol>
                            <li><a href='#oldGuard'>The Old Guard</a></li>
                            <li><a href='#wildBlade'>The Wild Blade</a></li>
                            <li><a href='#darkBarons'>The Dark Barons</a></li>
                        </ol>
                    </ol>
                    <li><a href='#LeadersSilverGuard'>Leaders / Importand Characters</a></li>
                    <ol>
                        <li><a href='#lefyrTheBrave'>Lefyr The Brave</a></li>
                        <li><a href='#talinTheSwift'>Talin The Swift</a></li>
                        <li><a href='#grishTheDestroyer'>Grish The Destroyer</a></li>
                    </ol>
                </ol>

                <li><a href='#tristan'>Tristan Of Whitewood</a></li>
                <ol>
                    <li><a href='#tristanDescription'>Description</a></li>
                    <li><a href='#tristanHistory'>History</a></li>
                    <ol>
                        <li><a href='#childhood'>Childhood</a></li>
                        <li><a href='#adulthood'>Adulthood</a></li>
                        <li><a href='#onTheRun'>Life On The Run</a></li>
                        <li><a href='#TristanModernDay'>Modern Day</a></li>
                    </ol>
                    <li><a href='#tristanPersonality'>Personality</a></li>
                </ol>

                <li><a href='#theGreatHunt'>The Great Hunt</a></li>
                <ol>
                    <li><a href='#preparation'>Preparation</a></li>
                    <li><a href='#theHunt'>The Hunt</a></li>
                    <li><a href='#theNightTrials'>The Night Trials</a></li>
                </ol>

                <li><a href='#werewolf'>Werewolf Features/Traits</a></li>
                <ol>
                    <li><a href='#shifting'>Shifting</a></li>
                    <li><a href='#moonCycles'>Moon Cycles</a></li>
                    <li><a href='#werewolfForm'>Werewolf Form</a></li>
                    <ol>
                        <li><a href='#changes'>Changes</a></li>
                        <li><a href='#Combat'>Combat</a></li>
                        <li><a href='#cursing'>Cursing Others</a></li>
                        <li><a href='#curingTheCurse'>Curring The Curse</a></li>
                    </ol>
                </ol>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}
        <div className="content-box">
            <h2 id='whitewood'>1. Whitewood</h2>
            <div className="container">
                <div className="text">
                    <a>{"->"} Residents: ~500
                        <br/>{"->"} Mining town in the mountains
                        <br/>{"->"} Headquarters of the silver guard
                        <br/>{"->"} Very remote/Hard to reach
                    </a>
                </div>
                <img src="Whitewood.webp"
                     alt="Descriptive alt text" className="image" style={{borderStyle: "solid", borderColor: "white"}}/>
            </div>
            <ol>
                <div className="content-box-alt">
                    <li><a id='whitewoodBasic'>Basic Information</a><br/><br/></li>
                    <a>Whitewood is a small, remote mining town high up in a mountain range valley surrounded by a large
                        pine forest. This leaves the town surrounded by either mountains or deep forest ranges, making
                        it
                        hard to navigate to and around the town, largely cutting it off from other civilizations, as the
                        travel through the forests and up the mountain can take multiple days if one is not familiar
                        with
                        the area. The town was originally founded as a colony and still serves to mine increasingly rare
                        materials for those who can afford them. The town has roughly 475 to 500 residents. Most of whom
                        are
                        miners or the current town's leadership and protectors going by the name of <a
                            href='#silverGuard'>The
                            Silver Guard</a>. This sort of occupying force has largely converted the town into a
                        fortress
                        for them and uses it as a headquarters, as they are an exceedingly large faction of monster
                        hunters
                        and swords for hire. With the town being located in the mountains, it experiences constant
                        snowfall
                        and often strong blizzards. Most of the local blacksmiths have been completely focused on the
                        production of silver weapons and other tools for <a href='#silverGuard'>The
                            Silver Guard</a>. And even though there are miners who live in town, it is rumored that
                        monsters
                        captured by <a href='#silverGuard'>The Silver Guard</a> are often worked to
                        death in the mines, mining the very ores used to destroy their kin.</a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='whitewoodHistory'>History</a><br/><br/></li>
                    <ol>
                        <li><a id='whitewoodOrigins'>Origins</a><br/><br/></li>
                        <a>Whitewood began as a mining town in the frontier and a colony for the rich of other larger
                            and
                            more developed towns as they discovered that rare metals and ores could be found in the
                            mountain
                            range. So a small caravan of roughly 80 settlers was sent to build the town, accompanied by
                            another 35 mercenaries to protect the caravan and the town for the next 7 years, as the area
                            was
                            known to be highly hostile, both because of the weather and because of the monsters and
                            beasts
                            roaming in the forest. One of these mercenaries was <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a>,
                            who would unite the mercenaries and build the first <a href='#silverGuard'>Silver Guard</a>,
                            but they were mostly known as small, ragtag groups due to them not acting as one large force
                            yet. The town grew quickly. Leading to multiple mines, houses, halls, and blacksmiths being
                            erected in only a few short years. While the population also grew from either new settlers
                            arriving or others being born in town, like <a href='#tristan'>Tristan Of
                                Whitewood</a>.</a><br/><br/>
                        <li><a id='whitewoodDevelopment'>Development</a><br/><br/></li>
                        <a>Over the next few years, the town's growth would slow down. Not many settlers wanted to move
                            to
                            the remote village, and many of those who did succumbed to the terrain and beasts around it.
                            It
                            was around this time that <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> united the many ragtag groups into one unified force by the name of <a
                                href='#silverGuard'>The Silver Guard</a> who, as the town's primary
                            protectors, held large amounts of power, only being outranked by the mayor himself. Over the
                            years, against the mayor's wishes, the town would be transformed into a fortress, and
                            mandatory
                            defense training was ordered by <a href='#silverGuard'>The Silver
                                Guard</a> Recruiting those that seemed capable of defending themselves. This left the
                            mining
                            town with more monster hunters than miners. The tensions between <a href='#silverGuard'>The
                                Silver Guard</a> and the mayor would eventually end in an event called <a
                                href='#theGreatHunt'>The Great Hunt</a> in which the mayor would be
                            accused of vampirism and, after a short and unfair trial, be impaled and burned in the town
                            square. The mayor was not the only one; <a href='#silverGuard'>The Silver
                                Guard</a> captured multiple townsfolk and accused them of other crimes. These prisoners
                            were
                            often those who opposed them, including <a href='#tristan'>Tristan Of
                                Whitewood</a> and his parents. This was the night that <a href='#silverGuard'>The Silver
                                Guard</a> and, by extension, <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> took total control of the town.</a><br/><br/>
                        <li><a id='whitewoodModernDay'>Modern Day</a><br/><br/></li>
                        <a>After the town's takeover by <a href='#silverGuard'>The Silver Guard</a>,
                            it was largely refashioned to be a fortress and training ground to train more recruits and
                            the
                            townspeople. <a href='#lefyrTheBrave'>Lefyr The Brave</a> would personally
                            oversee it while also cutting connections to other towns, only keeping a handful of trading
                            routes available for rare goods and transport of his own men. Visitors were often refused
                            entrance. And townsfolk who were not yet part of <a href='#silverGuard'>The
                                Silver Guard</a> were completely forbidden from leaving. And even though <a
                                href='#silverGuard'>The Silver Guard</a> would eventually split into
                            multiple <a href='#warBands'>War Bands</a> the would all leave
                            representatives behind who would rule on behalf of the <a href='#warBands'>War
                                Bands</a> and command the remaining town guard, who would continue to protect the town
                            and
                            were some of the best-trained fighters in the faction. Even <a href='#lefyrTheBrave'>Lefyr
                                The
                                Brave</a> would leave with his <a href='#warBands'>War Band</a>, <a
                                href='#oldGuard'>The Old Guard</a> but remain the spiritual leader of
                            the town as his <a href='#warBands'>War Band</a> remained the strongest
                            in <a href='#silverGuard'>The Silver Guard</a>.</a><br/><br/>
                    </ol>
                </div>
                <div className="content-box-alt">
                    <li><a id='residents'>Residents</a><br/><br/></li>
                    <a>The residents of Whitewood are mostly either employed or part of <a href='#silverGuard'
                    >The Silver
                        Guard</a>, and many who are not directly part of <a href='#silverGuard'>The
                        Silver Guard</a> work as blacksmiths or contract workers, building the fortifications for the
                        town.
                        Rarely, particularly charming villagers are allowed to leave town for a few months to conduct
                        trade
                        for the village. But should they not return in time, they will be treated as traitors and hunted
                        just like the monsters by <a href='#silverGuard'>The Silver Guard</a>. The
                        guard actually holds a good standing in town, many being radicalized by the events of <a
                            href='#theGreatHunt'>The Great Hunt</a> while others believe them to truly
                        be the protectors that they need. There are small groups of villagers that rebel against the
                        system
                        and wish to leave, but they keep their protests silent, as treason is often punished by death
                        by <a
                            href='#silverGuard'>The Silver Guard</a> as could be seen during <a
                            href='#theNightTrials'>The Night Trials</a>.</a><br/><br/>
                </div>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}
        <div className="content-box">
            <h2 id='silverGuard'>2. The Silver Guard</h2>
            <a>{"->"} Members: ~600-?
                <br/>{"->"} Headquarters: <a href='#whitewood'>Whitewood</a> but temporary
                camps are often build and relocated by <a href='#warBands'>War Bands</a>
                <br/>{"->"} Monster hunters by trade, but can be found as mercenaries aswell
                <br/>{"->"} Known for efficiency and brutality<br/>
            </a>
            <ol>
                <div className="content-box-alt">
                    <li><a id='silverGuardBasic'>Basic Information</a><br/><br/></li>
                    <a>The Silver Guard is a faction of unified monster hunters located out of the town of <a
                        href='#whitewood'>Whitewood</a>. They formed as an alliance at first, which
                        quickly grew into a fully adept army under the command of <a href='#lefyrTheBrave'
                        >Lefyr The
                            Brave</a> and his right-hand man, <a href='#grishTheDestroyer'>Grish The
                            Destroyer</a>. They often accept contracts for hunting monsters or security work all over
                        the
                        continents. As they are mostly working in <a href='#warBands'>War
                            Bands</a> which are smaller subsections of the main faction, they travel the land
                        themselves,
                        one being more ruthless than the next.</a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='silverGuardHistory'>History</a><br/><br/></li>
                    <ol>
                        <li><a id='silverGuardOrigins'>Origins</a><br/><br/></li>
                        <a>The Silver Guard was officially established during the <a href='#whitewoodDevelopment'>Development
                            Of Whitewood</a>, but the first seeds were already sown when the rich noblemen hired <a
                            href='#lefyrTheBrave'>Lefyr The Brave</a> as security detail for the
                            creation of a colony in the mountains, which would become <a href='#whitewood'>Whitewood</a>.
                            The man went on to recruit multiple smaller adventuring parties as further protection, on of
                            them being led by <a href='#grishTheDestroyer'>Grish The Destroyer</a>,
                            who would grow to be <a href='#lefyrTheBrave'>Lefyr The Brave's</a> most
                            trusted man. For the first few months, <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> remained quiet, simply doing his job but already slowly beginning to form
                            alliances between the multiple ragtag groups of adventurers. As the town grew, so did the
                            support between these groups, with <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> at the center. It was around this time that multiple hunts in the surrounding
                            forests would be conducted, making the men bond with each other over the danger they faced.
                            Finally, after years, <a href='#lefyrTheBrave'>Lefyr The Brave</a> would
                            present the groups the opportunity of becoming a strong, formidable force, which most groups
                            accepted right away. This marked the official founding of the Silver Guard. With this
                            alliance, <a href='#lefyrTheBrave'>Lefyr The Brave</a> stood almost
                            completely unopposed, only being trumped by the mayor himself. Who would be removed from
                            power a
                            few years after the founding during the events of <a href='#theGreatHunt'>The
                                Great Hunt</a> by <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> personally.</a><br/><br/>
                        <li><a id='takeover'>Whitewoods Takeover</a><br/><br/></li>
                        <a>The takeover of <a href='#whitewood'>Whitewood</a> was in the works for
                            years. <a href='#lefyrTheBrave'>Lefyr The Brave</a> and another shadowy
                            figure and future leader of <a href='#wildBlade'>The Wild Blade</a>, <a
                                href='#talinTheSwift'>Talin The Swift</a>. The planning already began
                            in the early years of the town, with <a href='#lefyrTheBrave'>Lefyr The
                                Brave</a> making a name for himself, portraying himself as a leader to the mercenaries
                            in
                            town who would go on to form the Silver Guard. After the formation of the guard and multiple
                            years of political work, <a href='#lefyrTheBrave'>Lefyr The Brave</a> held
                            major power in town, both in might and politics, leaving only the mayor as his superior, who
                            was
                            not fond of the development of the Silver Guard, being able to see through them and
                            attempting
                            to hinder their influence. Finally, the plan concluded after centuries as <a
                                href='#lefyrTheBrave'>Lefyr The Brave</a> called his men in the night
                            and began <a href='#theGreatHunt'>The Great Hunt</a> during which the
                            mayor would be captured, accused, and trialed as being a vampire, which was never truly
                            confirmed to be true. The Guard would stake the mayor, impale him, and burn the body to send
                            a
                            message to all that would oppose the guard, truly believing every word from their leader
                            blindly. This left <a href='#theGreatHunt'>The Great Hunt</a> as the next
                            in power, gaining him supreme control over the town.</a><br/><br/>
                        <li><a id='silverGuardModernDay'>Modern Day</a><br/><br/></li>
                        <a>The Silver Guard have largely evolved into a collection of nomadic legions with their own
                            approaches to operating and differing mentalities, but they do all still consider <a
                                href='#whitewood'>Whitewood</a> to be their capital. And while all
                            legions, or as they call themselves, <a href='#warBands'>War
                                Bands</a> operate mostly separately from each other, they all have left a handful of
                            soldiers and a representative behind in town who are collectively called "the town's guard,"
                            which is both a highly respected and honorable position to hold. There are a surprisingly
                            large
                            number of <a href='#warBands'>War Bands</a> but most are small and often
                            not noteworthy, being little more than a caravan with no more than 40 men. The biggest and
                            well-known legions, however, are true forces to be reckoned with and can be found under <a
                                href='#warBands'>War Bands</a>.</a><br/><br/>
                    </ol>
                </div>
                <div className="content-box-alt">
                    <li><a id='hierarchy'>Hierarchy</a><br/><br/></li>
                    <ol>
                        <li><a id='structure'>Structure</a><br/><br/></li>
                        <a>The structure of the Silver Guard can be divided into two perspectives. The years of
                            unification
                            and the years of the wild hunt. The years of unification refer to the old structure with all
                            Silver Guards being united under one banner, and the years of the wild hunt talk about the
                            current structure with the Silver Guards split up into their respective <a href='#warBands'
                            >War
                                Bands</a>.<br/> The Years of Unification: a simple leader/underling structure. Leader(<a
                                href='#lefyrTheBrave'>Lefyr The Brave</a>) {"->"} Right-hand men(<a
                                href='#grishTheDestroyer'>Grish The Destroyer</a>/<a
                                href='#talinTheSwift'>Talin The Swift</a>) {"->"} Commanders {"->"} Squad
                            leads {"->"} Hunters. This structure was strong but increasingly hard to manage. Which would
                            eventually lead to the structure that the Silver Guard would become known for during the
                            years of the Wild Hunt. This would take the already established structure and multiply it
                            over a handful of <a href='#warBands'>War Bands</a>. The Right-Hand
                            Men would form their own <a href='#warBands'>War Bands</a> leading to
                            yet another hierarchy between war bands. This one being comprised roughly like this: 
                            <a href='#oldGuard'>The Old Guard</a> 
                            {"->"} <a href='#darkBarons'>The Dark Barons</a> 
                            {"->"} <a href='#wildBlade'>The Wild Blade</a> 
                            {"->"} all following legions.</a><br/><br/>
                        <li><a id='warBands'>War Bands</a><br/><br/></li>
                        <ol>
                            <li><a id='oldGuard'>The Old Guard</a><br/></li>
                            <a><br/>Members: ~350
                                <br/>{"->"} Fighters with strong tactics
                                <br/>{"->"} Led by <a href='#lefyrTheBrave'>Lefyr The Brave</a><br/><br/>
                                The Old Guard is the largest and strongest war band in the Silver
                                Guards legions, led under the direct command of 
                                <a href='#lefyrTheBrave'>Lefyr The Brave</a>. Many of the old guard are either Soldiers
                                of the first wave or direct dependents who were born into the war band. 
                                They are some of the most ferocious fighters at the silver guard's
                                disposal and boast with a dangerous combination of tactics and man power. 
                                <a href='#lefyrTheBrave'>Lefyr The Brave</a> Formed the war band
                                after some of his higher commanders requested permission to gather men and go on hunts
                                far
                                out in the country. By extension, all other war bands were born of this one, being
                                quickly
                                followed by the formation of <a href='#darkBarons'>The Dark Barons</a> under the command
                                of his right-hand man, <a href='#grishTheDestroyer'>Grish The Destroyer</a> and shortly
                                after <a href='#wildBlade'>The Wild Blade</a> commanded by 
                                <a href='#talinTheSwift'>Talin The Swift</a>.</a><br/><br/>
                            <li><a id='wildBlade'>The Wild Blade</a><br/></li>
                            <a><br/>Members: ?
                                <br/>{"->"} Assassins and spies
                                <br/>{"->"} Led by <a href='#talinTheSwift'>Talin The Swift</a><br/>
                                <br/>The wild blade stands right behind <a href='#oldGuard'>The Old
                                Guard</a> in the silver guard's hierarchy, being more focused on espionage,
                                assassinations,
                                tracking, politics and more shady businesses. The wild blade acts as a sort of shadow
                                organization, being very secretive of their existence and numbers. Under the command
                                of <a href='#talinTheSwift'>Talin The Swift</a>, they track, spy and
                                when they deem it necessary, assassinate those that stand in their way or are deemed to
                                be
                                monsters. Most members are rouges, thieves and according to rumors even serial killers,
                                preferring the cities and towns, being the must urban War Band of them all, only being
                                marked by a sliver crest in the inside of their coats acting as a sort of badge. They
                                are no
                                fighters preferring ranged weapons, poisons and dagger as their tool, having strong
                                connections in many governments and organizations they are known to pull strings and
                                therefor are a dangerous foe to face as they specialize in making their enemies
                                disappear.</a><br/><br/>
                            <li><a id='darkBarons'>The Dark Barons</a><br/></li>
                            <a><br/>Members: ~250 (average (number changes often))
                                <br/>{"->"} Focused on underground combat
                                <br/>{"->"} Pure strength/little to no tactics at all
                                <br/>{"->"} Led by <a href='#grishTheDestroyer'>Grish The Destroyer</a><br/><br/>
                                The dark barons are a War Band comprised out of young recruits and
                                reckless warriors. This legion is known for believing in the mindset of muscle over
                                mind, often charging the enemy with pure rage, frightening their foes and crushing them
                                through the element of surprise. All these ideals can be led back to the leader, 
                                <a href='#grishTheDestroyer'>Grish The Destroyera</a>. The
                                barbarian often leads the charge himself, him and his fighters preferring tight tunnel
                                and general underground combat, specializing in it even. Though the reckless fighting
                                style often leads to many dead men at the end of the battle, the War Band stays relevant
                                by accepting jobs many would refuse and often hiring recruits in bulk, many not even
                                knowing the history of the silver guard at all. These fighters are also often recruited
                                for simple mercenary and security jobs, as it is expensive to replace both the fallen
                                warrior and their equipment. And while this might not be the most competent legion,
                                they're strength lies in numbers.</a><br/><br/>
                        </ol>
                    </ol>
                </div>
                <div className="content-box-alt">
                    <li><a id='LeadersSilverGuard'>Leaders / Importand Characters</a><br/><br/></li>
                    <ol>
                        <li><a id='lefyrTheBrave'>Lefyr The Brave</a><br/></li>
                        <a><br/>Lefyr the Brave is the leader of the Silver Guard and <a href='#oldGuard'>The
                            Old Guard</a> while also remaining as the spiritual leader of the town of <a href='#whitewood'
                        >Whitewood</a>.
                            Lefyr was part of the first wave of <a href='#whitewood'>Whitewood</a> settlers,
                            being hired to protect the colony from monsters, bandits, and beasts with a handful of other
                            mercenaries
                            who he would later form into the first Silver Guard. The Elf fighter, often found in a pristine set
                            of
                            silver armor, has a deep-seated hatred for those who are "tainted" as he calls them. Armed with many
                            tools to kill and torture the beasts of the night, he rules <a href='#whitewood'
                            >Whitewood</a> and <a
                                href='#oldGuard'>The Old Guard</a> with an iron fist, being stoic and having
                            little tolerance for weakness. Although he was reportedly always polite and almost charming to the
                            civilians, his charm was what allowed him to build his army of monster hunters.</a><br/><br/>
                        <li><a id='talinTheSwift'>Talin The Swift</a><br/></li>
                        <a><br/>Little is known about Talin the Swift, as he rarely if ever shows his face, and the few times he
                            did,
                            no one knew it was him. If rumors are to be believed, the man is cold, calculated, and a master of
                            infiltration and assassination, a warrior fitting of being the leader of <a href='#wildBlade'
                            >The
                                Wild Blade</a>. A signature dark mask made out of blackened wood concealing the rogue's face and
                            identity. Only the closest of his servants and <a href='#lefyrTheBrave'>Lefyr the
                                Brave</a> know the man's identity and appearance. Talin was the mastermind behind <a
                                href='#theGreatHunt'>The Great Hunt</a>, having planned every single part of
                            it to secure the Silver Guards total power over the town of <a href='#whitewood'
                            >Whitewood</a> and
                            in the process, becoming <a href='#lefyrTheBrave'>Lefyr The Brave's</a> most
                            trusted advisor.</a><br/><br/>
                        <li><a id='grishTheDestroyer'>Grish The Destroyer</a><br/></li>
                        <a><br/>Grish the Destroyer is a simple dwarf; being raised rough, he considers himself to be a
                            barbarian,
                            with his short temper backing up that claim. This can also be reflected in the dwarfs <a
                                href='#warBands'>War Bands</a>, <a href='#darkBarons'>The
                                Dark Barons</a> who mostly work underground, as Grish simply feels at home here. Grish was a
                            settler
                            of the first generation in <a href='#whitewood'>Whitewood</a>, working
                            alongsides <a href='#lefyrTheBrave'>Lefyr The Brave</a> from the beginning, who
                            took a liking to the dwarf, promoting him to be his right hand upon forming the silver legion, both
                            for
                            the barbarians brutish strength but also because he was sure that the dwarf wasent smart enough to
                            form
                            a que against him should it even com to that. Grish remained oblivious to that and still to this day
                            remains loyal to both <a href='#lefyrTheBrave'>Lefyr The Brave</a> and the Silver
                            Guard. He did however develop a grudge against <a href='#talinTheSwift'>Talin The
                                Swift</a> and they're legion <a href='#wildBlade'>The Wild Blade</a> as he
                            sees theeir tactics as unhonorable while also beliving that his legion should be the second
                            strongest in
                            the lands not on concernt with "politics"</a><br/><br/>
                    </ol>
                </div>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}
        <div className="fade-area" />
        {/*------------------------------------------------------------------------*/}
        <div className="content-box">
            <h2 id='tristan'> 3. Tristan Of Whitewood</h2>
            <ol>
                <div className="content-box-alt">
                    <li><a id='tristanDescription'>Description</a><br/></li>
                    <a><br/>{"->"} A deceptively slender wood elf, with shortened ears and a dirty blond low mohawk
                        <br/>{"->"} A scar marks his right eye, going from above the eyebrow all the way next to the lip.
                        <br/>{"->"} A usually cocky smile accompanies a clean-shaven face and green eyes.
                        <br/>{"->"} Dressed in parts of leather armor, accompanied by tools for the hunt of monsters,
                        he sits securely on him while also carrying a few furs and light clothes.</a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='tristanHistory'>History</a><br/><br/></li>
                    <ol>
                        <li><a id='childhood'>Childhood</a><br/></li>
                        <a><br/>Tristan was born during the early days of the colony of
                            <a href='#whitewood'>Whitewood</a> to
                            a mercenary who fell in love with a miner who she was escorting. Unbeknownst to her, the miner
                            was infected by the curse of <a href='#werewolf'>Lycanthropy</a>, which
                            was passed on to the child, making Tristan a full-blooded <a href='#werewolf'>werewolf</a>.
                            While the tension was thick, the parents loved each other, making the mother forgive Tristan's
                            father for the betrayal and raise the child as any normal child would be. The only difference
                            being that the father took the young Tristan out for "hunting trips" every full moon to teach
                            him how to <a href='#shifting'>control his curse</a>. While these trips
                            were often multiple days long, Tristan would also receive training in weaponry from both his
                            mother and father, making him a fairly competent hunter and fighter. Tristan also worked
                            part-time with his father in the mines. Which he would quickly give up as he reached adulthood
                            in favor of hunting.</a><br/><br/>
                        <li><a id='adulthood'>Adulthood</a><br/></li>
                        <a><br/>As Tristan reached adulthood, he fully dedicated himself to becoming a hunter for the town,
                            which he did to great success, delivering quality meats back to
                            <a href='#whitewood'>Whitewood</a> allowing
                            him to live a comfortable life with his parents. The by now fully established
                            <a href='#silverGuard'>Silver Guard</a> began to take interest in him and
                            forced him into a mandatory reserve training program, as the guard already held large amounts of
                            power both physically and politically. These training sessions taught him valuable skills like
                            tracking and fighting monsters, but ultimately Tristan refused to join the
                            <a href='#silverGuard'>The Silver Guard</a> simular to his mother, who
                            was a first-wave mercenary. This made the family a target in the eyes of the Silver Guard, who
                            began conducting espionage on the family. Tristan lived there happily for a few more years
                            before seeing all he had built up over the years of hard work crumble in a single night. For an
                            end of an era had arrived, and Tristan was swallowed by the events of
                            <a href='#theGreatHunt'>The Great Hunt</a> and subsequently
                            <a href='#theNightTrials'>The Night Trials</a>, breaking his last hope at a normal life.</a><br/><br/>
                        <li><a id='onTheRun'>Life On The Run</a><br/></li>
                        <a><br/>Tristan ran over the whole mountain range and through the deep forests for almost 3 days
                            straight, only stopping after collapsing from exhaustion near a riverbed in a clearing in the
                            deep woods. Here he would find a small gang of roadside raiders who attempted to rob the
                            unconscious man. But after realizing he carried nothing but the rags on his back, they took him
                            with them, assuming him to be another escaped convict. This led Tristan to run and rob with the
                            men for a few weeks, growing almost fond of them. But one fateful night, a
                            <a href='#moonCycles'>Blood Moon</a> arose unexpectedly. Even though Tristan had distanced himself
                            from camp, it was no use. His beast form ripped the only one he trusted to pieces. As Tristan awoke the next morning,
                            he gathered what gear they had and gave them the best burial he could under the conditions deep
                            in the forest. After honoring the dead, he decided to finally visit a town for the first time in
                            months, hoping that <a href='#silverGuard'>The Silver Guard</a> would be
                            minimal, which it luckily was. But this would not remain so for long, as the age of the
                            <a href='#warBands'>War Bands</a> had started to begin. Since that
                            fateful night, Tristan swore an oath. To cure his curse at any cost but use it while it remains
                            to protect those deserving of it. Tristan would begin a nomadic lifestyle, never staying in any
                            location too long. Making his money as a monster hunter and sword for hire while posing as a
                            writer, which, to his credit, he had become, writing down his experiences in a leather-bound
                            book while in reality only using it as an excuse to travel the world in hopes of finding someone
                            who could cure him of his curse.</a><br/><br/>
                        <li><a id='TristanModernDay'>Modern Day</a><br/></li>
                        <a><br/>Not much changes for Tristan; he tried to join parties but always was either chased off upon
                            being found out or abandoned them for their own safety. Tristan had traveled whole continents
                            now in search of someone who could cure him, most of these being in vain, with the few who
                            claimed they could help often lying to make some quick gold or attempting to rat him out to
                            <a href='#silverGuard'>The Silver Guard</a> as their old, withered wanted
                            posters still wither away in the dark corners of the city, the drawing not even of the human but
                            the wolf within, which was crude at best. Now, finally, a shady figure has requested Tristan's
                            presence in the Slumbering Giant Inn. Tristan's hopes of actually meeting someone here, though,
                            are slim. With nothing to lose, he makes his way there with the terrible gut feeling that
                            <a href='#wildBlade'>The Wild Blade</a> might be getting closer to tracking him down than he'd like.</a><br/><br/>
                    </ol>
                </div>
                <div className="content-box-alt">
                    <li><a id='tristanPersonality'>Personality</a><br/></li>
                    <a><br/>{"->"} Tristan is a naturally friendly and even smug person, with the occasional bad joke.
                        <br/>{"->"} This being a sort of coping mechanism for him keeping his dark past mostly secret, only telling those he
                        truly trusts.
                        <br/>{"->"} And while this friendly demeanor might be a mask, it is by no means an attempt
                        at deception, truly attempting to live the life of a normal adventurer.
                        <br/>{"->"} He is quite
                        distrustful of most at first until trust can take root in him.
                        <br/>{"->"} With his greatest flaw
                        being the fear of being found out by anyone, which terrifies him to the core, only
                        turning during the full moon or when his or the life of those he cares about is in
                        mortal danger, often abandoning the one he saved in fear that they think less of
                        him.</a><br/><br/>
                </div>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}
        <div className = "content-box">
            <h2 id = 'theGreatHunt' > 4. The Great Hunt </h2>
            <a>The Great Hunt was a mass hunt conducted by the residents of <a href='#whitewood'>Whitewood</a> under the
                command of <a href='#silverGuard'>The Silver Guard</a>.</a>
            <br/>
            <br/>
            <ol>
                <div className="content-box-alt">
                    <li><a id='preparation'>Preparation</a><br/></li>
                    <a><br/>The preparations for the great hunt go back many years before the actual event. Planning began
                        during <a href='#lefyrTheBrave'>Lefyr The Brave's</a> first attempts at
                        uniting the multiple ragtag groups who were hired to protect the town of
                        <a href='#whitewood'>Whitewood</a> and would later on form into the
                        <a href='#silverGuard'>The Silver Guard</a>. The true conspiracy began when
                        <a href='#lefyrTheBrave'>Lefyr The Brave</a> was approached by
                        <a href='#talinTheSwift'>Talin The Swift</a>, future leader
                        of <a href='#wildBlade'>The Wild Blade</a>. He could tell that the fighter's
                        intention and hunger for power could be used as a strong tool to secure himself a position of power
                        of his own. <a href='#talinTheSwift'>Talin The Swift</a> would act as an
                        advisor in the background, leading plots and organizing bribes and hunts while managing
                        <a href='#silverGuard'>The Silver Guard's</a> finances. In the later stages
                        of the town, he would begin to lobby the local government, implanting politicians and planting spies
                        while running a campaign for <a href='#lefyrTheBrave'>Lefyr The Brave</a>.
                        Finally, after years of building a solid foundation for
                        <a href='#silverGuard'>The Silver Guard</a>, they acted upon their plan. Only having informed the
                        commanders beforehand, many of the lower-ranking soldiers were woken up and informed that they would
                        begin a hunt, possibly the greatest of them all.</a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='theHunt'>The Hunt</a><br/></li>
                    <a><br/>Quickly after the <a href='#lefyrTheBrave'>Lefyr The Brave</a> called for
                        the hunt, multiple commanders of <a href='#silverGuard'>The Silver Guard</a> were sent out to wake
                        their men, who were not informed beforehand. This was to ensure
                        that no beast nor enemy of <a href='#silverGuard'>The Silver Guard</a> could
                        leave town beforehand. Half the army was mobilized in minutes, marching through the streets before
                        being split up. By this point almost the whole city was either a full-time
                        <a href='#silverGuard'>Silver Guard</a> or at least a reserve, vastly outnumbering any other residential
                        force. Hundreds of men were sent into the surrounding forests hunting and killing every creature in the surrounding
                        mountain range, cave systems, and woods. While a force of roughly 100 soldiers stayed behind under
                        the command of <a href='#grishTheDestroyer'>Grish The Destroyer</a> and
                        <a href='#talinTheSwift'>Talin The Swift</a> while <a href='#lefyrTheBrave'>Lefyr The Brave</a>
                        led his army in the wilderness. Many houses were raided by the guard. Some too
                        arrest monsters in disguise, criminals, innocents accused of crimes, and political enemies. Some
                        of <a href='#silverGuard'>The Silver Guard</a> even burgled homes for
                        valuables and blamed innocents for the crime. The guard would act as judge, jury, and executioner.
                        The most outrageous arrest was the mayor, who was arrested by
                        <a href='#grishTheDestroyer'>Grish The Destroyer</a> himself for the crime of harboring monsters in town. The mayor was executed the
                        same night in the town square. All others arrested were forced to watch. Many more were convicted
                        that night. Only a handful of families were detained for longer, namely the ones accused of
                        lycanthropy. The guard kept them in cages outside for two days, waiting for the full moon to rise.
                        One of these families is the one of <a href='#tristan'>Tristan Of Whitewood</a> his father, and himself preparing for certain doom as the accusations towards them
                        were true. This was the night <a href='#whitewood'>Whitewood</a> would become
                        what it was always destined to be, no mere mining town, but the stronghold of
                        <a href='#silverGuard'>The Silver Guard</a></a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='theNightTrials'>The Night Trials</a><br/></li>
                    <a><br/>As the night of the full moon approached, <a href='#lefyrTheBrave'>Lefyr
                        The Brave</a> returned with his men. With hundreds, if not thousands, of hunting trophies, both from
                        monsters and beasts, they returned to town. The night trials are known as a holiday to the
                        <a href='#silverGuard'>The Silver Guard</a> as for them it was the party to
                        celebrate their victory while they would execute the beasts of the night on a glorious bonfire. As
                        the moon revealed some villagers true forms, <a href='#tristan'>Tristan Of Whitewood</a> and his
                        father included, the trials began. Starting off with freeing the innocent
                        and rewarding them handsomely to keep the town's favor before moving on. Many innocents, though,
                        were accused and sentenced due to crimes pinned on them, these people often being outspoken
                        against <a href='#silverGuard'>The Silver Guard</a> or outright opposing
                        positions of power to redistribute them through <a href='#silverGuard'>The Silver Guard</a>
                        After countless beheadings, duels to the death, and other forms of torment, the
                        main event was upon the town of <a href='#whitewood'>Whitewood</a>, The
                        execution of the werewolves. The few werewolves living in the town would be burned at the stake in
                        pairs of two. A horrific event finally leaving only the family of
                        <a href='#tristan'>Tristan Of Whitewood</a>. The mother was sentenced to burn as well for knowing about harboring beasts in
                        town. <a href='#grishTheDestroyer'>Grish The Destroyer</a> wanted to execute
                        the whole family on one stake, but there was simply not enough space, which led him to cruelly
                        forcing <a href='#tristan'>Tristan Of Whitewood</a> to watch his own parents
                        burn at the stake. As they turned to ash, <a href='#tristan'>Tristan Of Whitewood</a> was overcome
                        with grief, pain, and anger, giving him the strength to break free.
                        In fear, sprinting through the alleys, followed by the whole mob of angry
                        <a href='#silverGuard'>Silver Guard's</a> He was intercepted by
                        <a href='#lefyrTheBrave'>Lefyr The Brave</a> right as he was about to escape. Lefyr only missed his lethal hit using his silver
                        sword due to his heavy drinking during the festivities, leaving a deep scar over
                        <a href='#tristan'>Tristans</a> eye.
                        As the werewolf dashed past him, <a href='#lefyrTheBrave'>Lefyr</a> sword that
                        he would one day meet this beast again and slay it. Referring to it as "the one that got away" or
                        "the runner".</a><br/><br/>
                </div>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}
        <div className="content-box">
            <h2 id = 'werewolf' > 5. Werewolf Features / Traits </h2>
            <ol>
                <div className="content-box-alt">
                    <li><a id='shifting'>Shifting</a><br/></li>
                    <br/>
                    <a>There are 3 forms of shifting: willingly, forcefully, and feral.</a><br/>
                    <ol><br/><br/>
                        <li><a>Willingly: Shifting Takes roughly 30-40 seconds but in stress situations (combat) the
                            shift takes one full turn<br/><br/></a></li>
                        <li><a>Focefully: The user shifts, unable to stop it. This occurs during a full moon. The user
                            stays in control, though.<br/><br/></a></li>
                        <li><a>Feral: This occurs during blood moons; the user will shift and loss control being forced
                            to attack anyone they see. The user can make CON saves to take back control for 3 turns
                            (difficulty and quantity of the check is up to the dm)<br/><br/></a></li>
                    </ol>
                    <a>Once the user is shifted, they can only shift back by waiting for the current night to end (if
                        the user shifted during the day the effects will subside once the next night passes)</a><br/><br/>
                </div>
                <div className="content-box-alt">
                    <li><a id='moonCycles'>Moon Cycles</a><br/></li>
                    <a><br/>{"->"} Every 5 (in-game) nights a full moon will rise.
                        <br/>{"->"} The DM throws a d8. Should the DM roll a
                        1, a blood moon will rise instead.
                        <br/>{"->"} (Up to the DM if the player can feel the moon coming onthat day/night.)
                    </a><br/><br/>
                </div>

                <div className="content-box-alt">
                    <li><a id='werewolfForm'>Werewolf Form</a><br/><br/></li>
                    <ol>
                        <li><a id='changes'>Changes</a><br/></li>
                        <a><br/>{"->"} User loses ability to speak.
                            <br/>{"->"} User can't use spells or weapons (claws/fangs/etc. only)
                            <br/>{"->"} AC = (10 + DEX mod + 2)
                            <br/>{"->"} HP = (Current HP + (lvl * 7)
                            <br/>{"->"} Movement = Current
                            Movement + 5ft
                        </a><br/><br/>
                        <a>Resistance to: Slashing, Piercing, Bludgeoning
                            <br/>Advantage Perception
                            <br/>Weakness:
                            Silver
                        </a><br/><br/>
                        <a>When shifting, INT, WIS, and CHA are all set to 8 (-1 mod), and the points are added to STR, DEX,
                            and CON:<br/><br/>
                            <ol>
                                INT: 10 - 2 = 8<br/>
                                WIS: 13 - 5 = 8<br/>
                                CHA: 12 - 4 = 8<br/>
                                <ol> = 11 points to relocate</ol>
                                <br/>
                                STR: 14 + 4 = 18<br/>
                                DEX: 18 + 4 = 22<br/>
                                CON: 16 + 3 = 19<br/>
                            </ol>
                            <br/>
                            (Points will be replaced equally if uneven on stat (CON here) is chosen to get the lower
                            addition.)
                        </a><br/><br/>
                        <li><a id='Combat'>Combat</a><br/></li>
                        <a><br/>{"->"} Multiattack: The werewolf makes two attacks: one with its bite and one with its claws (can
                            only be performed if less than half movement is used until the Ranger class unlocks it).<br/><br/>{"->"}
                            Bite: Melee Weapon Attack: +STR mod to hit, reach 5 ft., one target. Hit: 6 (1d8 + STR mod)
                            piercing damage.<br/><br/>{"->"} Claws: Melee Weapon Attack: +STR mod to hit, reach 5 ft., one
                            creature. Hit: 7 (2d4 + STR mod) slashing damage.</a><br/><br/>
                        <li><a id='cursing'>Cursing Others</a><br/></li>
                        <a><br/>{"->"} Target must either be willing or only have 10% of their hit points remaining.<br/>{"->"} To
                            give someone the curse, the werewolf must deliver a nonlethal bite to the victim's neck. (Victim
                            Max HP must be equal or greater than 25).</a><br/><br/>
                        <li><a id='curingTheCurse'>Curring The Curse</a><br/></li>
                        <a><br/>{"->"} Victims of a werewolf bite can be healed like described in the official books.<br/>{"->"} The
                            user should not be able to be cured by conventional means (left up to the DM) (Cure should only
                            be abled to be found near or during the end of the champain if there is a cure at
                            all)</a><br/><br/>
                    </ol>
                </div>
            </ol>
        </div>
        {/*------------------------------------------------------------------------*/}

        {/*
            <div className="spacer"></div>
            <div className="fade-area"></div>
            <div className="spacer"></div>
        */}
        {/* Create and insert the two fixed images */}
        <Script type="text/javascript" src="/CreateInsertFixedImages.js"/>
        </>
    )
}