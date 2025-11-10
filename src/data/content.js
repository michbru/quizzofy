// Placeholder content for Biology and Management topics
export const TOPICS = {
  biology: {
    id: 'biology',
    title: 'Cell Biology',
    sessions: [
      {
        id: 1,
        title: 'Cell Structure',
        slides: [
          {
            id: 1,
            title: 'What is a Cell?',
            content: 'A cell is the basic unit of life. All living organisms are made up of one or more cells that carry out the functions necessary for life.',
            visual: '🔬'
          },
          {
            id: 2,
            title: 'Cell Membrane',
            content: 'The cell membrane is a protective barrier that controls what enters and exits the cell. It is selectively permeable and made of a lipid bilayer.',
            visual: '🧫'
          },
          {
            id: 3,
            title: 'Nucleus',
            content: 'The nucleus is the control center of the cell. It contains DNA and directs all cellular activities including growth and reproduction.',
            visual: '⚛️'
          },
          {
            id: 4,
            title: 'Organelles',
            content: 'Cells contain specialized structures called organelles. Each organelle has a specific function like mitochondria for energy and ribosomes for protein synthesis.',
            visual: '🧬'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'The cell membrane controls what enters and exits the cell.',
            correctAnswer: true,
            explanation: 'Correct! The cell membrane is selectively permeable and acts as a protective barrier.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is the control center of the cell?',
            options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Cell Membrane'],
            correctAnswer: 1,
            explanation: 'The nucleus contains DNA and directs all cellular activities.'
          },
          {
            id: 3,
            type: 'true-false',
            question: 'Mitochondria are responsible for protein synthesis.',
            correctAnswer: false,
            explanation: 'Mitochondria produce energy. Ribosomes are responsible for protein synthesis.'
          },
          {
            id: 4,
            type: 'multiple-choice',
            question: 'What is the basic unit of life?',
            options: ['Atom', 'Molecule', 'Cell', 'Organ'],
            correctAnswer: 2,
            explanation: 'The cell is the basic unit of life.'
          },
          {
            id: 5,
            type: 'fill-blank',
            question: 'The cell membrane is made of a lipid ___.',
            correctAnswer: 'bilayer',
            explanation: 'The cell membrane consists of a lipid bilayer.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'All living organisms are made up of cells.',
            correctAnswer: true,
            explanation: 'All living organisms, from bacteria to humans, are made up of one or more cells.'
          }
        ]
      },
      {
        id: 2,
        title: 'Mitosis',
        slides: [
          {
            id: 1,
            title: 'What is Mitosis?',
            content: 'Mitosis is the process of cell division that produces two identical daughter cells. It is essential for growth and tissue repair.',
            visual: '🧬'
          },
          {
            id: 2,
            title: 'The Four Phases: PMAT',
            content: 'Mitosis has four main phases: Prophase, Metaphase, Anaphase, and Telophase. Each phase has distinct characteristics.',
            visual: '🔄'
          },
          {
            id: 3,
            title: 'Prophase & Metaphase',
            content: 'In Prophase, chromosomes condense. In Metaphase, chromosomes align at the cell equator.',
            visual: '➡️'
          },
          {
            id: 4,
            title: 'Anaphase & Telophase',
            content: 'In Anaphase, sister chromatids separate. In Telophase, two nuclei form and the cell begins to divide.',
            visual: '⬅️➡️'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Mitosis creates two identical daughter cells.',
            correctAnswer: true,
            explanation: 'Mitosis produces two genetically identical daughter cells.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which phase comes first in PMAT?',
            options: ['Metaphase', 'Prophase', 'Anaphase', 'Telophase'],
            correctAnswer: 1,
            explanation: 'Prophase is the first phase of mitosis.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Mitosis creates ___ identical cells.',
            correctAnswer: 'two',
            explanation: 'Mitosis produces exactly two identical daughter cells.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Chromosomes align at the equator during Prophase.',
            correctAnswer: false,
            explanation: 'Chromosomes align at the equator during Metaphase, not Prophase.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'When do sister chromatids separate?',
            options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
            correctAnswer: 2,
            explanation: 'Sister chromatids separate during Anaphase.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Mitosis is used for growth and tissue repair.',
            correctAnswer: true,
            explanation: 'Mitosis allows organisms to grow and repair damaged tissues.'
          }
        ]
      },
      {
        id: 3,
        title: 'DNA Structure',
        slides: [
          {
            id: 1,
            title: 'The Double Helix',
            content: 'DNA has a double helix structure, like a twisted ladder. It stores genetic information in all living organisms.',
            visual: '🧬'
          },
          {
            id: 2,
            title: 'Base Pairs',
            content: 'DNA contains four bases: Adenine, Thymine, Guanine, and Cytosine. A pairs with T, and G pairs with C.',
            visual: '🔗'
          },
          {
            id: 3,
            title: 'Sugar-Phosphate Backbone',
            content: 'The sides of the DNA ladder are made of alternating sugar and phosphate molecules, providing structural support.',
            visual: '🪜'
          },
          {
            id: 4,
            title: 'Genes and Chromosomes',
            content: 'Segments of DNA called genes code for proteins. DNA is packaged into chromosomes in the cell nucleus.',
            visual: '📦'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple-choice',
            question: 'What shape is DNA?',
            options: ['Single strand', 'Double helix', 'Circle', 'Triangle'],
            correctAnswer: 1,
            explanation: 'DNA has a double helix structure, like a twisted ladder.'
          },
          {
            id: 2,
            type: 'true-false',
            question: 'Adenine pairs with Guanine in DNA.',
            correctAnswer: false,
            explanation: 'Adenine pairs with Thymine. Guanine pairs with Cytosine.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'DNA contains ___ different bases.',
            correctAnswer: 'four',
            explanation: 'DNA contains four bases: A, T, G, and C.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'DNA stores genetic information.',
            correctAnswer: true,
            explanation: 'DNA stores all genetic information in living organisms.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What makes up the sides of the DNA ladder?',
            options: ['Base pairs', 'Proteins', 'Sugar-phosphate', 'Lipids'],
            correctAnswer: 2,
            explanation: 'The DNA backbone is made of alternating sugar and phosphate molecules.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Genes are segments of DNA that code for proteins.',
            correctAnswer: true,
            explanation: 'Genes are specific DNA sequences that provide instructions for making proteins.'
          }
        ]
      },
      {
        id: 4,
        title: 'Cellular Respiration',
        slides: [
          {
            id: 1,
            title: 'Energy Production',
            content: 'Cellular respiration is how cells convert glucose into ATP (energy). This process occurs in the mitochondria.',
            visual: '⚡'
          },
          {
            id: 2,
            title: 'Three Main Stages',
            content: 'The process has three stages: Glycolysis (in cytoplasm), Krebs Cycle, and Electron Transport Chain (both in mitochondria).',
            visual: '🔄'
          },
          {
            id: 3,
            title: 'Glucose and Oxygen',
            content: 'Cells use glucose (from food) and oxygen (from breathing) to produce energy, water, and carbon dioxide.',
            visual: '🍎➡️⚡'
          },
          {
            id: 4,
            title: 'ATP: Cellular Currency',
            content: 'ATP (Adenosine Triphosphate) is the energy currency of cells. One glucose molecule can produce up to 38 ATP molecules.',
            visual: '💰'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Cellular respiration occurs in the mitochondria.',
            correctAnswer: true,
            explanation: 'Most of cellular respiration (Krebs Cycle and ETC) occurs in mitochondria.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is the main product of cellular respiration?',
            options: ['Glucose', 'ATP', 'DNA', 'Protein'],
            correctAnswer: 1,
            explanation: 'ATP (energy) is the main product of cellular respiration.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Cells use glucose and ___ to produce energy.',
            correctAnswer: 'oxygen',
            explanation: 'Cellular respiration requires both glucose and oxygen.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Glycolysis occurs in the mitochondria.',
            correctAnswer: false,
            explanation: 'Glycolysis occurs in the cytoplasm, not the mitochondria.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'How many main stages does cellular respiration have?',
            options: ['One', 'Two', 'Three', 'Four'],
            correctAnswer: 2,
            explanation: 'Cellular respiration has three main stages: Glycolysis, Krebs Cycle, and Electron Transport Chain.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'ATP stands for Adenosine Triphosphate.',
            correctAnswer: true,
            explanation: 'ATP (Adenosine Triphosphate) is the energy currency of cells.'
          }
        ]
      },
      {
        id: 5,
        title: 'Photosynthesis',
        slides: [
          {
            id: 1,
            title: 'Making Food from Sunlight',
            content: 'Photosynthesis is how plants convert sunlight, water, and carbon dioxide into glucose and oxygen.',
            visual: '🌱☀️'
          },
          {
            id: 2,
            title: 'Chloroplasts and Chlorophyll',
            content: 'Photosynthesis occurs in chloroplasts. Chlorophyll is the green pigment that captures light energy.',
            visual: '🍃'
          },
          {
            id: 3,
            title: 'Light and Dark Reactions',
            content: 'Light reactions capture energy and produce ATP. Dark reactions (Calvin Cycle) use that energy to make glucose.',
            visual: '☀️🌙'
          },
          {
            id: 4,
            title: 'Oxygen Release',
            content: 'Plants release oxygen as a byproduct of photosynthesis. This oxygen is essential for most life on Earth.',
            visual: '💨'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Photosynthesis produces glucose and oxygen.',
            correctAnswer: true,
            explanation: 'Photosynthesis converts light energy into glucose while releasing oxygen.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Where does photosynthesis occur?',
            options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Ribosomes'],
            correctAnswer: 2,
            explanation: 'Photosynthesis occurs in chloroplasts in plant cells.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: '___ is the green pigment that captures light.',
            correctAnswer: 'chlorophyll',
            explanation: 'Chlorophyll is the pigment that makes plants green and captures light energy.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Plants use oxygen to make glucose.',
            correctAnswer: false,
            explanation: 'Plants use carbon dioxide (not oxygen) along with water and sunlight to make glucose.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What does the Calvin Cycle produce?',
            options: ['Oxygen', 'ATP', 'Glucose', 'Water'],
            correctAnswer: 2,
            explanation: 'The Calvin Cycle (dark reactions) produces glucose.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Photosynthesis requires sunlight, water, and carbon dioxide.',
            correctAnswer: true,
            explanation: 'These three inputs are essential for photosynthesis to occur.'
          }
        ]
      },
      {
        id: 6,
        title: 'Cell Transport',
        slides: [
          {
            id: 1,
            title: 'Moving Materials',
            content: 'Cells need to move materials in and out. Transport can be passive (no energy) or active (requires energy).',
            visual: '🚪'
          },
          {
            id: 2,
            title: 'Diffusion',
            content: 'Diffusion is the movement of molecules from high to low concentration. It happens naturally without energy.',
            visual: '➡️'
          },
          {
            id: 3,
            title: 'Osmosis',
            content: 'Osmosis is the diffusion of water across a membrane. Water moves to balance concentrations on both sides.',
            visual: '💧'
          },
          {
            id: 4,
            title: 'Active Transport',
            content: 'Active transport moves materials against the concentration gradient. It requires energy (ATP) to pump molecules.',
            visual: '⬆️⚡'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Diffusion requires energy.',
            correctAnswer: false,
            explanation: 'Diffusion is passive transport and does not require energy.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is the diffusion of water called?',
            options: ['Active transport', 'Osmosis', 'Endocytosis', 'Exocytosis'],
            correctAnswer: 1,
            explanation: 'Osmosis is specifically the diffusion of water across a membrane.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Active transport requires ___.',
            correctAnswer: 'energy',
            explanation: 'Active transport requires energy (ATP) to move molecules against the concentration gradient.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Molecules move from low to high concentration in diffusion.',
            correctAnswer: false,
            explanation: 'In diffusion, molecules move from HIGH to LOW concentration.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which type of transport does NOT require energy?',
            options: ['Active transport', 'Sodium-potassium pump', 'Diffusion', 'Endocytosis'],
            correctAnswer: 2,
            explanation: 'Diffusion is passive transport and does not require energy.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Osmosis is the movement of water across a membrane.',
            correctAnswer: true,
            explanation: 'Osmosis specifically refers to water movement across a selectively permeable membrane.'
          }
        ]
      },
      {
        id: 7,
        title: 'Enzymes',
        slides: [
          {
            id: 1,
            title: 'Biological Catalysts',
            content: 'Enzymes are proteins that speed up chemical reactions in cells. They act as biological catalysts.',
            visual: '⚡🧪'
          },
          {
            id: 2,
            title: 'Lock and Key Model',
            content: 'Enzymes have a specific shape that fits their substrate like a lock and key. Each enzyme works on specific molecules.',
            visual: '🔐'
          },
          {
            id: 3,
            title: 'Active Site',
            content: 'The active site is where the substrate binds to the enzyme. This is where the reaction occurs.',
            visual: '🎯'
          },
          {
            id: 4,
            title: 'Factors Affecting Enzymes',
            content: 'Temperature, pH, and substrate concentration affect enzyme activity. Extreme conditions can denature (destroy) enzymes.',
            visual: '🌡️'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Enzymes are proteins that speed up reactions.',
            correctAnswer: true,
            explanation: 'Enzymes are protein catalysts that increase reaction rates.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is the part of the enzyme where the reaction occurs?',
            options: ['Substrate', 'Product', 'Active site', 'Catalyst'],
            correctAnswer: 2,
            explanation: 'The active site is where the substrate binds and the reaction takes place.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Enzymes fit their substrate like a lock and ___.',
            correctAnswer: 'key',
            explanation: 'The lock and key model describes how enzymes have specific shapes for their substrates.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'One enzyme can work on many different types of molecules.',
            correctAnswer: false,
            explanation: 'Enzymes are specific - each enzyme typically works on one type of substrate.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What can denature an enzyme?',
            options: ['Substrate', 'Extreme temperature', 'Active site', 'Water'],
            correctAnswer: 1,
            explanation: 'Extreme temperatures (and pH levels) can denature enzymes, destroying their function.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Enzymes are consumed in the reactions they catalyze.',
            correctAnswer: false,
            explanation: 'Enzymes are not consumed - they can be reused many times.'
          }
        ]
      },
      {
        id: 8,
        title: 'Cell Cycle Review',
        slides: [
          {
            id: 1,
            title: 'The Cell Cycle',
            content: 'The cell cycle is the series of events that cells go through as they grow and divide. It includes interphase and mitosis.',
            visual: '🔄'
          },
          {
            id: 2,
            title: 'Interphase',
            content: 'During interphase, cells grow, replicate DNA, and prepare for division. This is the longest part of the cell cycle.',
            visual: '📈'
          },
          {
            id: 3,
            title: 'Checkpoints',
            content: 'The cell cycle has checkpoints that ensure DNA is replicated correctly. Damaged cells may be stopped from dividing.',
            visual: '🛑✓'
          },
          {
            id: 4,
            title: 'Cell Cycle Regulation',
            content: 'Cell cycle regulation prevents uncontrolled division. When regulation fails, it can lead to cancer.',
            visual: '⚠️'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Interphase is when cells divide.',
            correctAnswer: false,
            explanation: 'Interphase is when cells grow and prepare. Division happens during mitosis.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is the longest part of the cell cycle?',
            options: ['Mitosis', 'Interphase', 'Cytokinesis', 'Prophase'],
            correctAnswer: 1,
            explanation: 'Interphase takes up most of the cell cycle time.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'The cell cycle has ___ that check for errors.',
            correctAnswer: 'checkpoints',
            explanation: 'Checkpoints ensure the cell is ready to proceed to the next phase.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Cancer can result from cell cycle regulation failure.',
            correctAnswer: true,
            explanation: 'When cell cycle regulation fails, uncontrolled division can lead to cancer.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'When is DNA replicated?',
            options: ['During mitosis', 'During interphase', 'During cytokinesis', 'Never'],
            correctAnswer: 1,
            explanation: 'DNA is replicated during the S phase of interphase.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'The cell cycle includes both growth and division.',
            correctAnswer: true,
            explanation: 'The cell cycle encompasses both growth (interphase) and division (mitosis).'
          }
        ]
      }
    ]
  },
  management: {
    id: 'management',
    title: 'Business Management',
    sessions: [
      {
        id: 1,
        title: 'Leadership Basics',
        slides: [
          {
            id: 1,
            title: 'What is Leadership?',
            content: 'Leadership is the ability to influence and guide individuals or teams toward achieving goals. Great leaders inspire and motivate others.',
            visual: '👔'
          },
          {
            id: 2,
            title: 'Leadership vs Management',
            content: 'Leadership focuses on vision and inspiration, while management focuses on execution and processes. Both are essential for success.',
            visual: '🎯'
          },
          {
            id: 3,
            title: 'Leadership Styles',
            content: 'Common styles include autocratic (directive), democratic (collaborative), and laissez-faire (hands-off). Effective leaders adapt their style.',
            visual: '🔄'
          },
          {
            id: 4,
            title: 'Key Leadership Qualities',
            content: 'Successful leaders demonstrate integrity, communication skills, emotional intelligence, and the ability to make difficult decisions.',
            visual: '⭐'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Leadership and management are exactly the same thing.',
            correctAnswer: false,
            explanation: 'Leadership focuses on vision and inspiration, while management focuses on execution and processes.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which leadership style is most collaborative?',
            options: ['Autocratic', 'Democratic', 'Laissez-faire', 'Dictatorial'],
            correctAnswer: 1,
            explanation: 'Democratic leadership involves collaboration and input from team members.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Leadership is the ability to ___ and guide others.',
            correctAnswer: 'influence',
            explanation: 'Leadership is fundamentally about influencing others toward goals.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Effective leaders only use one leadership style.',
            correctAnswer: false,
            explanation: 'Effective leaders adapt their style based on the situation and team needs.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which is a key quality of successful leaders?',
            options: ['Micromanaging', 'Emotional intelligence', 'Avoiding decisions', 'Ignoring feedback'],
            correctAnswer: 1,
            explanation: 'Emotional intelligence helps leaders understand and manage their own and others\' emotions.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Great leaders inspire and motivate others.',
            correctAnswer: true,
            explanation: 'Inspiration and motivation are core aspects of effective leadership.'
          }
        ]
      },
      {
        id: 2,
        title: 'Strategic Planning',
        slides: [
          {
            id: 1,
            title: 'What is Strategy?',
            content: 'Strategy is a long-term plan designed to achieve specific goals. It defines how an organization will compete and succeed.',
            visual: '🗺️'
          },
          {
            id: 2,
            title: 'SWOT Analysis',
            content: 'SWOT analyzes Strengths, Weaknesses, Opportunities, and Threats. This framework helps organizations understand their position.',
            visual: '📊'
          },
          {
            id: 3,
            title: 'Setting Objectives',
            content: 'Good objectives are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Clear objectives guide action.',
            visual: '🎯'
          },
          {
            id: 4,
            title: 'Implementation',
            content: 'Strategy execution requires clear communication, resource allocation, and monitoring progress. Many strategies fail due to poor implementation.',
            visual: '⚙️'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'SWOT stands for Strengths, Weaknesses, Opportunities, and Threats.',
            correctAnswer: true,
            explanation: 'SWOT is a strategic planning framework that analyzes these four elements.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What does the M in SMART objectives stand for?',
            options: ['Meaningful', 'Measurable', 'Manageable', 'Motivating'],
            correctAnswer: 1,
            explanation: 'SMART objectives must be Measurable to track progress.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Strategy is a ___-term plan to achieve goals.',
            correctAnswer: 'long',
            explanation: 'Strategy focuses on long-term planning and competitive positioning.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Most strategies fail due to poor planning, not poor implementation.',
            correctAnswer: false,
            explanation: 'Many well-planned strategies fail due to poor execution and implementation.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which is part of SWOT analysis?',
            options: ['Profits', 'Opportunities', 'Customers', 'Products'],
            correctAnswer: 1,
            explanation: 'Opportunities (external positive factors) are one of the four SWOT components.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'SMART objectives should be time-bound.',
            correctAnswer: true,
            explanation: 'The T in SMART stands for Time-bound - objectives need deadlines.'
          }
        ]
      },
      {
        id: 3,
        title: 'Team Management',
        slides: [
          {
            id: 1,
            title: 'Building Effective Teams',
            content: 'High-performing teams have clear goals, defined roles, mutual trust, and open communication. Team building is a continuous process.',
            visual: '👥'
          },
          {
            id: 2,
            title: 'Team Development Stages',
            content: 'Teams go through Forming (getting to know each other), Storming (conflicts), Norming (establishing norms), and Performing (high productivity).',
            visual: '📈'
          },
          {
            id: 3,
            title: 'Conflict Resolution',
            content: 'Healthy conflict can drive innovation. Managers should address conflicts early, listen to all sides, and focus on solutions.',
            visual: '🤝'
          },
          {
            id: 4,
            title: 'Delegation',
            content: 'Effective delegation empowers team members, develops skills, and frees managers for strategic work. Match tasks to skills and provide support.',
            visual: '📋'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'All conflict in teams is harmful and should be avoided.',
            correctAnswer: false,
            explanation: 'Healthy conflict can drive innovation and better solutions when managed properly.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'Which stage comes after Forming in team development?',
            options: ['Norming', 'Performing', 'Storming', 'Adjourning'],
            correctAnswer: 2,
            explanation: 'The stages go: Forming, Storming, Norming, Performing.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Effective delegation ___ team members.',
            correctAnswer: 'empowers',
            explanation: 'Delegation should empower team members and develop their capabilities.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'High-performing teams require mutual trust.',
            correctAnswer: true,
            explanation: 'Trust is fundamental to team effectiveness and collaboration.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What should managers do when conflicts arise?',
            options: ['Ignore them', 'Address them early', 'Take sides', 'Avoid the team'],
            correctAnswer: 1,
            explanation: 'Managers should address conflicts early before they escalate.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Team building is a one-time event.',
            correctAnswer: false,
            explanation: 'Team building is a continuous process that requires ongoing attention.'
          }
        ]
      },
      {
        id: 4,
        title: 'Communication Skills',
        slides: [
          {
            id: 1,
            title: 'Effective Communication',
            content: 'Communication is the exchange of information and ideas. Effective communication is clear, concise, and considers the audience.',
            visual: '💬'
          },
          {
            id: 2,
            title: 'Active Listening',
            content: 'Active listening means fully concentrating, understanding, and responding thoughtfully. It involves eye contact, questions, and paraphrasing.',
            visual: '👂'
          },
          {
            id: 3,
            title: 'Verbal vs Nonverbal',
            content: 'Communication includes verbal (words) and nonverbal (body language, tone). Nonverbal cues often carry more weight than words.',
            visual: '🗣️'
          },
          {
            id: 4,
            title: 'Feedback',
            content: 'Constructive feedback should be specific, timely, balanced (positive and negative), and focused on behavior not personality.',
            visual: '📝'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Nonverbal communication can be more important than words.',
            correctAnswer: true,
            explanation: 'Body language and tone often communicate more than the actual words spoken.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is a key part of active listening?',
            options: ['Interrupting', 'Multitasking', 'Paraphrasing', 'Ignoring'],
            correctAnswer: 2,
            explanation: 'Paraphrasing (restating in your own words) shows you understand the speaker.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Effective communication should be clear and ___.',
            correctAnswer: 'concise',
            explanation: 'Concise communication gets the message across without unnecessary details.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Feedback should focus on personality rather than behavior.',
            correctAnswer: false,
            explanation: 'Feedback should focus on specific behaviors, not attack someone\'s personality.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which is an example of nonverbal communication?',
            options: ['Email', 'Body language', 'Report', 'Memo'],
            correctAnswer: 1,
            explanation: 'Body language is a form of nonverbal communication.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Active listening involves fully concentrating on the speaker.',
            correctAnswer: true,
            explanation: 'Active listening requires full attention and engagement with the speaker.'
          }
        ]
      },
      {
        id: 5,
        title: 'Decision Making',
        slides: [
          {
            id: 1,
            title: 'The Decision Process',
            content: 'Good decisions follow a process: identify the problem, gather information, consider alternatives, make the choice, and evaluate results.',
            visual: '🤔'
          },
          {
            id: 2,
            title: 'Types of Decisions',
            content: 'Decisions can be strategic (long-term, high-impact), tactical (medium-term), or operational (day-to-day). Each requires different approaches.',
            visual: '⚖️'
          },
          {
            id: 3,
            title: 'Data-Driven Decisions',
            content: 'Using data and analytics improves decision quality. However, intuition and experience also play important roles.',
            visual: '📊'
          },
          {
            id: 4,
            title: 'Common Pitfalls',
            content: 'Avoid confirmation bias (seeking only supporting info), analysis paralysis (overthinking), and groupthink (pressure to conform).',
            visual: '⚠️'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Good decisions should only rely on data, never intuition.',
            correctAnswer: false,
            explanation: 'While data is important, intuition and experience also contribute to good decisions.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What type of decision has long-term, high impact?',
            options: ['Operational', 'Tactical', 'Strategic', 'Routine'],
            correctAnswer: 2,
            explanation: 'Strategic decisions are long-term and have significant organizational impact.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Analysis ___ occurs when you overthink decisions.',
            correctAnswer: 'paralysis',
            explanation: 'Analysis paralysis is when overthinking prevents making a decision.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'The decision process includes evaluating results.',
            correctAnswer: true,
            explanation: 'Evaluating outcomes is the final step to learn and improve future decisions.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What is confirmation bias?',
            options: ['Using data', 'Seeking only supporting information', 'Asking questions', 'Evaluating options'],
            correctAnswer: 1,
            explanation: 'Confirmation bias is seeking information that confirms your existing beliefs.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Groupthink can lead to poor decisions.',
            correctAnswer: true,
            explanation: 'Groupthink, where pressure to conform suppresses dissent, often leads to poor decisions.'
          }
        ]
      },
      {
        id: 6,
        title: 'Motivation Theories',
        slides: [
          {
            id: 1,
            title: 'What Motivates People?',
            content: 'Motivation is what drives people to take action. Understanding motivation helps managers inspire and engage their teams.',
            visual: '🔥'
          },
          {
            id: 2,
            title: 'Maslow\'s Hierarchy',
            content: 'Maslow proposed five levels of needs: physiological, safety, belonging, esteem, and self-actualization. Lower needs must be met first.',
            visual: '🔺'
          },
          {
            id: 3,
            title: 'Intrinsic vs Extrinsic',
            content: 'Intrinsic motivation comes from within (enjoyment, purpose). Extrinsic motivation comes from external rewards (money, recognition).',
            visual: '💡💰'
          },
          {
            id: 4,
            title: 'Herzberg\'s Two Factors',
            content: 'Hygiene factors (salary, conditions) prevent dissatisfaction. Motivators (achievement, recognition) create satisfaction. Both are needed.',
            visual: '➕➖'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Intrinsic motivation comes from external rewards.',
            correctAnswer: false,
            explanation: 'Intrinsic motivation comes from within, like enjoyment or purpose. Extrinsic motivation comes from external rewards.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What is at the top of Maslow\'s hierarchy?',
            options: ['Safety', 'Belonging', 'Self-actualization', 'Physiological'],
            correctAnswer: 2,
            explanation: 'Self-actualization (reaching one\'s full potential) is at the top of Maslow\'s pyramid.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Herzberg identified hygiene factors and ___.',
            correctAnswer: 'motivators',
            explanation: 'Herzberg\'s two-factor theory includes hygiene factors and motivators.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'According to Maslow, higher needs can be met before lower needs.',
            correctAnswer: false,
            explanation: 'Maslow proposed that lower-level needs must be satisfied before higher-level needs.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which is an example of extrinsic motivation?',
            options: ['Personal growth', 'Salary bonus', 'Enjoyment', 'Purpose'],
            correctAnswer: 1,
            explanation: 'A salary bonus is an external reward, making it extrinsic motivation.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Hygiene factors create job satisfaction according to Herzberg.',
            correctAnswer: false,
            explanation: 'Hygiene factors prevent dissatisfaction but don\'t create satisfaction. Motivators create satisfaction.'
          }
        ]
      },
      {
        id: 7,
        title: 'Change Management',
        slides: [
          {
            id: 1,
            title: 'Managing Change',
            content: 'Change management is the process of preparing, supporting, and helping individuals adapt to organizational change.',
            visual: '🔄'
          },
          {
            id: 2,
            title: 'Resistance to Change',
            content: 'People resist change due to fear, uncertainty, loss of control, or bad past experiences. Understanding resistance helps address it.',
            visual: '🛡️'
          },
          {
            id: 3,
            title: 'Kotter\'s 8 Steps',
            content: 'Kotter\'s model includes: create urgency, build coalition, form vision, communicate, empower action, create wins, build on change, anchor in culture.',
            visual: '8️⃣'
          },
          {
            id: 4,
            title: 'Communication in Change',
            content: 'Frequent, transparent communication is critical during change. Explain why, what, and how. Listen to concerns and feedback.',
            visual: '📢'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'People naturally embrace organizational change.',
            correctAnswer: false,
            explanation: 'Most people resist change due to fear, uncertainty, and loss of control.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'How many steps are in Kotter\'s change model?',
            options: ['5', '6', '8', '10'],
            correctAnswer: 2,
            explanation: 'Kotter\'s change management model has 8 steps.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Communication during change should be frequent and ___.',
            correctAnswer: 'transparent',
            explanation: 'Transparent communication builds trust and reduces uncertainty during change.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Understanding why people resist change can help address it.',
            correctAnswer: true,
            explanation: 'Understanding the root causes of resistance allows managers to address concerns effectively.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'What is the first step in Kotter\'s model?',
            options: ['Build coalition', 'Create urgency', 'Form vision', 'Communicate'],
            correctAnswer: 1,
            explanation: 'Creating a sense of urgency is the first step in Kotter\'s change model.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Change management is only about planning, not implementation.',
            correctAnswer: false,
            explanation: 'Change management includes preparing, supporting, and helping people through the entire change process.'
          }
        ]
      },
      {
        id: 8,
        title: 'Performance Management',
        slides: [
          {
            id: 1,
            title: 'Managing Performance',
            content: 'Performance management is the continuous process of setting expectations, monitoring progress, providing feedback, and developing employees.',
            visual: '📊'
          },
          {
            id: 2,
            title: 'Setting Expectations',
            content: 'Clear performance expectations should be specific, measurable, and aligned with organizational goals. Employees need to know what success looks like.',
            visual: '🎯'
          },
          {
            id: 3,
            title: 'Regular Feedback',
            content: 'Don\'t wait for annual reviews. Provide ongoing feedback - both positive reinforcement and constructive criticism.',
            visual: '🔄'
          },
          {
            id: 4,
            title: 'Development Plans',
            content: 'Help employees grow through training, mentoring, and stretch assignments. Development benefits both the individual and organization.',
            visual: '📈'
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'true-false',
            question: 'Feedback should only be given during annual reviews.',
            correctAnswer: false,
            explanation: 'Feedback should be ongoing and regular, not just during annual reviews.'
          },
          {
            id: 2,
            type: 'multiple-choice',
            question: 'What makes good performance expectations?',
            options: ['Vague and flexible', 'Specific and measurable', 'Secret', 'Impossible'],
            correctAnswer: 1,
            explanation: 'Performance expectations should be specific and measurable so employees understand what\'s expected.'
          },
          {
            id: 3,
            type: 'fill-blank',
            question: 'Performance management is a ___ process.',
            correctAnswer: 'continuous',
            explanation: 'Performance management is continuous, not a one-time event.'
          },
          {
            id: 4,
            type: 'true-false',
            question: 'Employee development benefits both the individual and organization.',
            correctAnswer: true,
            explanation: 'Development improves employee skills and satisfaction while building organizational capability.'
          },
          {
            id: 5,
            type: 'multiple-choice',
            question: 'Which is part of performance management?',
            options: ['Ignoring problems', 'Monitoring progress', 'Avoiding feedback', 'Hiding expectations'],
            correctAnswer: 1,
            explanation: 'Monitoring progress is a key component of performance management.'
          },
          {
            id: 6,
            type: 'true-false',
            question: 'Feedback should include both positive and constructive elements.',
            correctAnswer: true,
            explanation: 'Effective feedback balances positive reinforcement with constructive criticism.'
          }
        ]
      }
    ]
  }
};

// Helper function to get random topic
export function getRandomTopic() {
  const topics = Object.values(TOPICS);
  return topics[Math.floor(Math.random() * topics.length)];
}
