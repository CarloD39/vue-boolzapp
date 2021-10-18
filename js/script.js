Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        
        data: {             
            contacts: [
                {
                    name: 'Andrea D.',
                    avatar: './img/avatar7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '6/01/2021 15:30:55',
                            text: 'Come va?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '6/01/2021 18:50:00',
                            text: "sei vivo?",
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '6/01/2021 20:15:22',
                            text: 'Si scusa, ho avuto troppo da fare',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '6/01/2021 20:15:50',
                            text: 'Ti chiamo piu tardi cosi ci organizziamo con le macchine',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '6/01/2021 20:18:12',
                            text: 'Va bene, perfetto',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Sveva',
                    avatar: './img/avatar7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '05/03/2021 12:00:00',
                            text: 'Ho saputo che andata bene la verfica',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 13:00:25',
                            text: 'Yessss, meglio del previsto!',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 13:00:55',
                            text: 'DAJE!!',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Giovanni',
                    avatar: './img/avatar7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '05/03/2021 12:00:00',
                            text: 'Non credo di uscire stasera',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 13:00:25',
                            text: 'Perche? Saremmo tutti tranne te',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 14:05:00',
                            text: 'Ho del lavoro da sbrigare',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 14:05:22',
                            text: 'Un progetto che devo chiudere entro domani mattina',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 14:15:22',
                            text: 'Va bene, ho capito...',
                            status: 'sent',
                            showMenu: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '05/03/2021 18:30:00',
                            text: 'Birra stasera per le 10?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 18:30:30',
                            text: 'mmmh perche no?!',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 18:31:00',
                            text: 'Grande, allora passo io più tardi',
                            status: 'sent',
                            showMenu: false
                        },
                    ],
                },
                {
                    name: 'Marco',
                    avatar: './img/avatar7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '05/03/2021 18:30:00',
                            text: 'Ciao Vittorio, tutto bene?',
                            status: 'sent',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 18:30:30',
                            text: 'Mi sa che ha sbagliato numero...',
                            status: 'received',
                            showMenu: false
                        },
                        {
                            date: '05/03/2021 18:31:00',
                            text: 'Ah perfetto, mi scusi',
                            status: 'sent',
                            showMenu: false
                        },
                    ],
                },
            ],

            counter: 0, // For contact selection (MILESTONE 2)
            showMessages: false, // To see messages (MILESTONE 2)
            myWords: '', // (MILESTONE 3)
            find: '', // For search bar (MILESTONE 4)
            notificationText: 'Attiva le notifiche Desktop', // Bonus
            lastAccess: new Date().toLocaleString(), // Date 
            menuVisibility : false, // For options menu (info & delete) (MILESTONE 5)
            selectedMessage : '', // For message selection (MILESTONE 5)
        },
           
    //----------------------------------------------------------------------------
        
        methods: {
            
            //Get the current date
            getCurrentDate: function() {
                const dateTimeNow = dayjs();
                return dateTimeString = dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            },

            // AddClass method
            notificationOn: function() {
                this.notificationText = 'Notifiche desktop attivate';
                console.log('Notifiche attivate');
            },

            // Contact selection function on click
            contact: function(item) {
                this.counter = item;
                this.showMessages = true;
                console.log(this.counter);
              },

    //-----------------------------------------------------Nuovo Messaggio 

            // Automatic Message \ Preparazione per la prossila funzione di nome "newMessage"

            interlocutorText: function() {
                setTimeout(() => {
                    
                    const theInterlocutorMessage = {
                        date: this.getCurrentDate(),
                        text: 'Va bene',  //risposta statica
                        status: 'received',
                        showMenu: false
                    }
                    
                    this.counter.messages.push(theInterlocutorMessage); 
                },2000);
            },

            // New Object->new message
            newMessage: function() {
                const myNewMessage = {
                    date: this.getCurrentDate(),
                    text: this.myWords,
                    status: 'sent',
                    showMenu: false
                }

                this.myWords = ''; // To inizialize
                this.counter.messages.push(myNewMessage); // pusho l'oggetto nellarray
                this.interlocutorText(); // answer -> automatic message from the interlocutor
            },

    //-----------------------------------------------------------------------------

            // Find a person among the contacts
            chatSearch: function(){
            return this.contacts.filter(item => {
                return item.name.toLowerCase().includes(this.find.toLowerCase());
                });
            },

    //----------------------------------------------------------------------------------------

            // Delete the message(any) 
            // open/close dropdownmenu
            letMenuVisible: function(elem){ 
                this.selectedMessage = elem;
                this.menuVisibility = !this.menuVisibility;            
            },    

            //dropdown menu->delete the message
            deleteMessage: function(index){
                const messages = this.counter['messages'];
                messages.splice(index,1);               
            },
        }
    }
);
