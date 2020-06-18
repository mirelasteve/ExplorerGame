const user = 
    {
        userProfile:{
            userName:'What is your name captain',
            title:'seaman',
            currentShip:{name:'lugger',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUbUwclS4P3XduE_tyzKuUpVt_gYwk4WXlxQsDgTm5DKHiG5c9&usqp=CAU'},
            level:1,
            swc:50000,
            sobriquet:'after 10 level',
            currentMission:[],
            winBattleWars:0,
            knowledgePoints:0,
            experience:0


        },
        userBenefits:{
            languages:0,
            literature:0,
            politics:0,
            history:0,
            geography:0,
            biology:0,
            chemistry:0,
            physics:0
        },
        userShips:{},
        userMissions:[{},{}],
        userBattles:[],
        titles:['seaman','boatswain','chief boatswain',
        'lieutenant','commander','captain','commorode',
        'vice-admiral','admiral'],
        levelMissions:[
            {level:1,
            missions:[
                {
                    mission:'Visit Agricultural Market and take a mission',
                    isDone:false,
                    experience:1000,
                    continent:'Africa',
                    country:'Egypt',
                    type:'agrocultural'
                    
                }
                , {
                    mission:'Visit the Palace and take a mission',
                    isDone:false,
                    experience:1000,
                    continent:'Europe',
                    country:'Netherlands',
                    type:'manufacturing'
                },
                {
                    mission:'Visit Manufacture and take a mission',
                    isDone:false,
                    experience:1000,
                    continent:'Europe',
                    country:'Russia',
                    type:'diplomacy'
                },
                {
                    mission:'Visit the Health Care center and take a mission',
                    isDone:false,
                    experience:1000,
                    continent:'Africa',
                    country:'Tunisia',
                    type:'health care'
                }
            ]
            },
            {level:2,
                missions:[
                    {
                        mission:'South Africa Diamonds',
                        isDone:false,
                        experience:1000,
                        country:'Southe Africa',
                        type:'agricultural'
                        
                    }
                    , {
                        mission:'Angola quest',
                        isDone:false,
                        experience:1000,
                        country:'Angola',
                        type:'manufacturing'
                        
                    },
                    {
                        mission:'From missions Visit the Health Care center and take a mission',
                        isDone:false,
                        continent:'Africa',
                        type:'diplomacy',
                        country:'Egypt',
                        kilos:20,
                        experience:1700
                    },
                    {
                        mission:'From missions Visit the Health Care center and take a mission',
                        isDone:false,
                        continent:'Africa',
                        type:'health care',
                        country:'Egypt',
                        kilos:20,
                        experience:1500
                    }
                ]
            },
            {level:3,
                missions:[
                    {
                        mission:' level 3 Visit Agriculteral market and do an escort',
                        isDone:false,
                        experience:1000,
                        country:'France',
                        
                    }
                    , {
                        mission:' level 3  Palace and get a mission',
                        isDone:false
                    },
                    {
                        mission:'Visit Manufacture and escort',
                        isDone:false
                    },
                    {
                        mission:'level 2 Visit the Health care center and get a mission',
                        isDone:false
                    }
                ]
            }
        ]
    }
export default user;