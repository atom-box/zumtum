/**         TESTs     **/
/*
   Zumtum  Copyright (C) 2019  Evan Genest
    This program comes with ABSOLUTELY NO WARRANTY; for details type `show w'.
    This is free software, and you are welcome to redistribute it
    under certain conditions; type `show c' for details.

    A bunch more needs to be done still to the license.
*/


/**          TOGGLEs     **/
        var el1 = document.getElementById('instructions-place');
    
        function instructionsToggle(){
            el1.innerHTML = "Lather, Rinse, Repeat";
        }

        function fileLoaderToggle(){
            // Unhide.       Element should have a bootstrap explanation beneath and be grayed out by bootstrap.
        }



/**         RADIO BUTTONS     **/
function watson(){
	let inputZoneEl = document.getElementById('zone-of-input');
	inputZoneEl.innerHTML = watsonString;
    console.log('watson')
}

function eisenhower(){
	let inputZoneEl = document.getElementById('zone-of-input');
	inputZoneEl.innerHTML = eisenhowerString;
    console.log('eisenhower')

}

function visifyBrowser(){
    let bTemp; // temp store while swapping classNames.
    let el3 = document.getElementById('pdfButton');
    bTemp = el3.className;
    el3.className = el3.getAttribute('attic');
    el3.setAttribute('attic', bTemp);
    console.log(`Attic now has ${el3.getAttribute('attic')}`);
}

/**      D A T A B A S E todo! go to SQL   **/

// Array of 
// 0  Instructions
// 1, 2, ...   
var messages = []; 

// String of
// inputted text (giant, from the user or the options menu)

// Array of 
// 0, 1, 2, ...  Parsed out of user input string
var passages = []; 

// Array of 
// 0, 1, 2, ...  Written by the user. 
// Named in tribute to Mike Hernandez
var questionings = []; 

// String of
// sample reading 1
// Accessed on 7/25/2019 from 
var watsonString = `We wish to suggest a structure for the salt of deoxyribose nucleic acid (D.N.A.). This structure has novel features which are of considerable biological interest. A structure for nucleic acid has already been proposed by Pauling and Corey (1). They kindly made their manuscript available to us in advance of publication. Their model consists of three intertwined chains, with the phosphates near the fibre axis, and the bases on the outside. In our opinion, this structure is unsatisfactory for two reasons: (1) We believe that the material which gives the X-ray diagrams is the salt, not the free acid. Without the acidic hydrogen atoms it is not clear what forces would hold the structure together, especially as the negatively charged phosphates near the axis will repel each other. (2) Some of the van der Waals distances appear to be too small.

Another three-chain structure has also been suggested by Fraser (in the press). In his model the phosphates are on the outside and the bases on the inside, linked together by hydrogen bonds. This structure as described is rather ill-defined, and for this reason we shall not comment on it.

We wish to put forward a radically different structure for the salt of deoxyribose nucleic acid. This structure has two helical chains each coiled round the same axis (see diagram). We have made the usual chemical assumptions, namely, that each chain consists of phosphate diester groups joining ß-D-deoxyribofuranose residues with 3',5' linkages. The two chains (but not their bases) are related by a dyad perpendicular to the fibre axis. Both chains follow right- handed helices, but owing to the dyad the sequences of the atoms in the two chains run in opposite directions. Each chain loosely resembles Furberg's2 model No. 1; that is, the bases are on the inside of the helix and the phosphates on the outside. The configuration of the sugar and the atoms near it is close to Furberg's 'standard configuration', the sugar being roughly perpendicular to the attached base. There is a residue on each every 3.4 A. in the z-direction. We have assumed an angle of 36° between adjacent residues in the same chain, so that the structure repeats after 10 residues on each chain, that is, after 34 A. The distance of a phosphorus atom from the fibre axis is 10 A. As the phosphates are on the outside, cations have easy access to them.

The structure is an open one, and its water content is rather high. At lower water contents we would expect the bases to tilt so that the structure could become more compact.  The novel feature of the structure is the manner in which the two chains are held together by the purine and pyrimidine bases. The planes of the bases are perpendicular to the fibre axis. The are joined together in pairs, a single base from the other chain, so that the two lie side by side with identical z-co-ordinates. One of the pair must be a purine and the other a pyrimidine for bonding to occur. The hydrogen bonds are made as follows : purine position 1 to pyrimidine position 1 ; purine position 6 to pyrimidine position 6.

If it is assumed that the bases only occur in the structure in the most plausible tautomeric forms (that is, with the keto rather than the enol configurations) it is found that only specific pairs of bases can bond together. These pairs are : adenine (purine) with thymine (pyrimidine), and guanine (purine) with cytosine (pyrimidine).  In other words, if an adenine forms one member of a pair, on either chain, then on these assumptions the other member must be thymine ; similarly for guanine and cytosine. The sequence of bases on a single chain does not appear to be restricted in any way. However, if only specific pairs of bases can be formed, it follows that if the sequence of bases on one chain is given, then the sequence on the other chain is automatically determined.

It has been found experimentally (3,4) that the ratio of the amounts of adenine to thymine, and the ration of guanine to cytosine, are always bery close to unity for deoxyribose nucleic acid.

It is probably impossible to build this structure with a ribose sugar in place of the deoxyribose, as the extra oxygen atom would make too close a van der Waals contact. The previously published X-ray data (5,6) on deoxyribose nucleic acid are insufficient for a rigorous test of our structure. So far as we can tell, it is roughly compatible with the experimental data, but it must be regarded as unproved until it has been checked against more exact results. Some of these are given in the following communications. We were not aware of the details of the results presented there when we devised our structure, which rests mainly though not entirely on published experimental data and stereochemical arguments.

It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.  Full details of the structure, including the conditions assumed in building it, together with a set of co-ordinates for the atoms, will be published elsewhere. We are much indebted to Dr. Jerry Donohue for constant advice and criticism, especially on interatomic distances. We have also been stimulated by a knowledge of the general nature of the unpublished experimental results and ideas of Dr. M. H. F. Wilkins, Dr. R. E. Franklin and their co-workers at King's College, London. One of us (J. D. W.) has been aided by a fellowship from the National Foundation for Infantile Paralysis.
MOLECULAR STRUCTURE OF NUCLEIC ACIDS, J. D. WATSON F. H. C. CRICK, 2 April 1953
`


// String of
// sample reading 2
// Accessed on 7/25/2019 from http://watsonandcrick.net/paper/
// There is a great commentary, line by line, at 
var eisenhowerString = `My fellow Americans: Three days from now, after half a century in the service of our country, I shall lay down the responsibilities of office as, in traditional and solemn ceremony, the authority of the Presidency is vested in my successor. This evening I come to you with a message of leave-taking and farewell, and to share a few final thoughts with you, my countrymen.
 Like every other citizen, I wish the new President, and all who will labor with him, Godspeed. I pray that the coming years will be blessed with peace and prosperity for all. Our people expect their President and the Congress to find essential agreement on issues of great moment, the wise resolution of which will better shape the future of the Nation.
My own relations with the Congress, which began on a remote and tenuous basis when, long ago, a member of the Senate appointed me to West Point, have since ranged to the intimate during the war and immediate post-war period, and, finally, to the mutually interdependent during these past eight years. In this final relationship, the Congress and the Administration have, on most vital issues, cooperated well, to serve the national good rather than mere partisanship, and so have assured that the business of the Nation should go forward. So, my official relationship with the Congress ends in a feeling, on my part, of gratitude that we have been able to do so much together.
We now stand ten years past the midpoint of a century that has witnessed four major wars among great nations. Three of these involved our own country. Despite these holocausts America is today the strongest, the most influential and most productive nation in the world. Understandably proud of this pre-eminence, we yet realize that America's leadership and prestige depend, not merely upon our unmatched material progress, riches and military strength, but on how we use our power in the interests of world peace and human betterment.
Throughout America's adventure in free government, our basic purposes have been to keep the peace; to foster progress in human achievement, and to enhance liberty, dignity and integrity among people and among nations. To strive for less would be unworthy of a free and religious people. Any failure traceable to arrogance, or our lack of comprehension or readiness to sacrifice would inflict upon us grievous hurt both at home and abroad.
Progress toward these noble goals is persistently threatened by the conflict now engulfing the world. It commands our whole attention, absorbs our very beings. We face a hostile ideology -- global in scope, atheistic in character, ruthless in purpose, and insidious in method. Unhappily the danger is poses promises to be of indefinite duration. To meet it successfully, there is called for, not so much the emotional and transitory sacrifices of crisis, but rather those which enable us to carry forward steadily, surely, and without complaint the burdens of a prolonged and complex struggle -- with liberty the stake. Only thus shall we remain, despite every provocation, on our charted course toward permanent peace and human betterment.
Crises there will continue to be. In meeting them, whether foreign or domestic, great or small, there is a recurring temptation to feel that some spectacular and costly action could become the miraculous solution to all current difficulties. A huge increase in newer elements of our defense; development of unrealistic programs to cure every ill in agriculture; a dramatic expansion in basic and applied research -- these and many other possibilities, each possibly promising in itself, may be suggested as the only way to the road we wish to travel.
But each proposal must be weighed in the light of a broader consideration: the need to maintain balance in and among national programs -- balance between the private and the public economy, balance between cost and hoped for advantage -- balance between the clearly necessary and the comfortably desirable; balance between our essential requirements as a nation and the duties imposed by the nation upon the individual; balance between actions of the moment and the national welfare of the future. Good judgment seeks balance and progress; lack of it eventually finds imbalance and frustration.
The record of many decades stands as proof that our people and their government have, in the main, understood these truths and have responded to them well, in the face of stress and threat. But threats, new in kind or degree, constantly arise. I mention two only. A vital element in keeping the peace is our military establishment. Our arms must be mighty, ready for instant action, so that no potential aggressor may be tempted to risk his own destruction.
Our military organization today bears little relation to that known by any of my predecessors in peacetime, or indeed by the fighting men of World War II or Korea. Until the latest of our world conflicts, the United States had no armaments industry. American makers of plowshares could, with time and as required, make swords as well. But now we can no longer risk emergency improvisation of national defense; we have been compelled to create a permanent armaments industry of vast proportions. Added to this, three and a half million men and women are directly engaged in the defense establishment. We annually spend on military security more than the net income of all United States corporations.
This conjunction of an immense military establishment and a large arms industry is new in the American experience. The total influence -- economic, political, even spiritual -- is felt in every city, every State house, every office of the Federal government. We recognize the imperative need for this development. Yet we must not fail to comprehend its grave implications. Our toil, resources and livelihood are all involved; so is the very structure of our society.
In the councils of government, we must guard against the acquisition of unwarranted influence, whether sought or unsought, by the militaryindustrial complex. The potential for the disastrous rise of misplaced power exists and will persist.
We must never let the weight of this combination endanger our liberties or democratic processes. We should take nothing for granted. Only an alert and knowledgeable citizenry can compel the proper meshing of the huge industrial and military machinery of defense with our peaceful methods and goals, so that security and liberty may prosper together.
Akin to, and largely responsible for the sweeping changes in our industrial-military posture, has been the technological revolution during recent decades. In this revolution, research has become central; it also becomes more formalized, complex, and costly. A steadily increasing share is conducted for, by, or at the direction of, the Federal government.
Today, the solitary inventor, tinkering in his shop, has been overshadowed by task forces of scientists in laboratories and testing fields. In the same fashion, the free university, historically the fountainhead of free ideas and scientific discovery, has experienced a revolution in the conduct of research. Partly because of the huge costs involved, a government contract becomes virtually a substitute for intellectual curiosity. For every old blackboard there are now hundreds of new electronic computers.
The prospect of domination of the nation's scholars by Federal employment, project allocations, and the power of money is ever present and is gravely to be regarded. Yet, in holding scientific research and discovery in respect, as we should, we must also be alert to the equal and opposite danger that public policy could itself become the captive of a scientifictechnological elite. It is the task of statesmanship to mold, to balance, and to integrate these and other forces, new and old, within the principles of our democratic system -- ever aiming toward the supreme goals of our free society.
Another factor in maintaining balance involves the element of time. As we peer into society's future, we -- you and I, and our government -- must avoid the impulse to live only for today, plundering, for our own ease and convenience, the precious resources of tomorrow. We cannot mortgage the material assets of our grandchildren without risking the loss also of their political and spiritual heritage. We want democracy to survive for all generations to come, not to become the insolvent phantom of tomorrow.
Down the long lane of the history yet to be written America knows that this world of ours, ever growing smaller, must avoid becoming a community of dreadful fear and hate, and be instead, a proud confederation of mutual trust and respect.
Such a confederation must be one of equals. The weakest must come to the conference table with the same confidence as do we, protected as we are by our moral, economic, and military strength. That table, though scarred by many past frustrations, cannot be abandoned for the certain agony of the battlefield.
Disarmament, with mutual honor and confidence, is a continuing imperative. Together we must learn how to compose differences, not with arms, but with intellect and decent purpose. Because this need is so sharp and apparent I confess that I lay down my official responsibilities in this field with a definite sense of disappointment. As one who has witnessed the horror and the lingering sadness of war -- as one who knows that another war could utterly destroy this civilization which has been so slowly and painfully built over thousands of years -- I wish I could say tonight that a lasting peace is in sight.
Happily, I can say that war has been avoided. Steady progress toward our ultimate goal has been made. But, so much remains to be done. As a private citizen, I shall never cease to do what little I can to help the world advance along that road.
So -- in this my last good night to you as your President -- I thank you for the many opportunities you have given me for public service in war and peace. I trust that in that service you find some things worthy; as for the rest of it, I know you will find ways to improve performance in the future.
You and I -- my fellow citizens -- need to be strong in our faith that all nations, under God, will reach the goal of peace with justice. May we be ever unswerving in devotion to principle, confident but humble with power, diligent in pursuit of the Nation's great goals. To all the peoples of the world, I once more give expression to America's prayerful and continuing aspiration.
-Presidential Farewell Address, Dwight D. Eisenhower, 1961 
`

// Parsing probs to anticipate: blank lines.   Eccentric line returns, like a sentence fragment per line.