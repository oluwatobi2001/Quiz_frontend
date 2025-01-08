

export const questions = [
    {
        "id": 6932,
        "question": "What is a topic in Kafka?",
        "description": "Understanding basic Kafka concepts.",
        "answers": {
            "answer_a": "A type of database",
            "answer_b": "A category or feed name to which records are published",
            "answer_c": "A type of server",
            "answer_d": "A security protocol",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "A topic is a category or feed name to which records are published. Topics are the basic unit of organization in Kafka and can have multiple subscribers (consumers).",
        "tip": null,
        "tags": [
            {
                "name": "Apache Kafka"
            }
        ],
        "category": "Apache Kafka",
        "difficulty": "Easy"
    },
    {
        "id": 5492,
        "question": "How do you handle API errors globally in Vue?",
        "description": "Exploring global error handling strategies in Vue.",
        "answers": {
            "answer_a": "Use 'v-if' to check for errors",
            "answer_b": "Use a global mixin with 'errorCaptured'",
            "answer_c": "Write error handling code inside 'methods'",
            "answer_d": "Use 'Vuex' mutations",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "You can use a global mixin with the 'errorCaptured' lifecycle hook to handle API errors globally in Vue.",
        "tip": null,
        "tags": [
            {
                "name": "VueJS"
            }
        ],
        "category": "VueJS",
        "difficulty": "Medium"
    },
    {
        "id": 1008,
        "question": "When started for the first time, minikube requires Internet access. True or False?",
        "description": null,
        "answers": {
            "answer_a": "True",
            "answer_b": "False",
            "answer_c": null,
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Kubernetes"
            }
        ],
        "category": "Docker",
        "difficulty": "Easy"
    },
    {
        "id": 1139,
        "question": "In OpenShift, what is the purpose of a DeploymentConfig?",
        "description": null,
        "answers": {
            "answer_a": "To manage database connections",
            "answer_b": "To define and control the lifecycle of applications and pods",
            "answer_c": "To schedule automatic backups",
            "answer_d": "To configure network policies",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Openshift"
            }
        ],
        "category": "DevOps",
        "difficulty": "Medium"
    },
    {
        "id": 4728,
        "question": "Which HTTP method is typically used to send data to the server?",
        "description": "Understanding HTTP methods.",
        "answers": {
            "answer_a": "POST",
            "answer_b": "GET",
            "answer_c": "DELETE",
            "answer_d": "HEAD",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "The 'POST' method is typically used to send data to the server, such as form submissions or JSON payloads.",
        "tip": null,
        "tags": [
            {
                "name": "nodeJS"
            }
        ],
        "category": "NodeJs",
        "difficulty": "Easy"
    },
    {
        "id": 2901,
        "question": "How do you perform an atomic update using Django ORM?",
        "description": "Atomic updates ensure that a field is updated without the risk of data conflicts or race conditions.",
        "answers": {
            "answer_a": "Use the F() object to update the field value atomically",
            "answer_b": "Use the save() method with force_update=True",
            "answer_c": "Use the filter() method",
            "answer_d": "Use raw SQL queries",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "To perform an atomic update, use the F() object to reference the existing value of a field and update it in an atomic manner, ensuring no data conflicts.",
        "tip": null,
        "tags": [
            {
                "name": "Django"
            }
        ],
        "category": "Django",
        "difficulty": "Medium"
    },
    {
        "id": 799,
        "question": "How do you get the number of containers running, paused and stopped?",
        "description": null,
        "answers": {
            "answer_a": "docker info",
            "answer_b": "sudo --docker info",
            "answer_c": "docker --info",
            "answer_d": null,
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "Docker"
            }
        ],
        "category": "Docker",
        "difficulty": "Medium"
    },
    {
        "id": 4364,
        "question": "What's the best way to handle dynamic redirects in Next.js?",
        "description": "Understanding redirect management.",
        "answers": {
            "answer_a": "Client redirects",
            "answer_b": "Middleware with rewrite patterns",
            "answer_c": "Static redirects",
            "answer_d": "Manual routing",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "Using middleware with rewrite patterns provides flexible redirect handling while maintaining SEO benefits and proper status codes.",
        "tip": null,
        "tags": [
            {
                "name": "Next.js"
            }
        ],
        "category": "Next.js",
        "difficulty": "Medium"
    },
    {
        "id": 6172,
        "question": "How do you track the touched state of form fields in Vue's Composition API for validation purposes?",
        "description": "Learning how to differentiate between untouched and touched fields.",
        "answers": {
            "answer_a": "Create a reactive object to track whether each form field has been touched, and update the state on 'blur' events",
            "answer_b": "Use 'computed()' to determine touched state",
            "answer_c": "Fields are automatically tracked by Vue",
            "answer_d": "Wrap each input in 'markRaw()' to track its state",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "Creating a reactive object to track the 'touched' status of fields allows you to apply validation only when the user has interacted with the field.",
        "tip": null,
        "tags": [
            {
                "name": "VueJS"
            }
        ],
        "category": "VueJS",
        "difficulty": "Medium"
    },
    {
        "id": 3987,
        "question": "What is the function of 'get_template_part()' in WordPress?",
        "description": "Understanding the use of 'get_template_part()' in WordPress themes.",
        "answers": {
            "answer_a": "It loads a template part from a specified file",
            "answer_b": "It gets the content of a post",
            "answer_c": "It fetches data from a custom database table",
            "answer_d": "It inserts a plugin's output into the theme",
            "answer_e": null,
            "answer_f": null
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
            "answer_e_correct": "false",
            "answer_f_correct": "false"
        },
        "correct_answer": null,
        "explanation": "'get_template_part()' allows you to include reusable parts of a theme's template, improving code modularity.",
        "tip": null,
        "tags": [
            {
                "name": "WordPress"
            }
        ],
        "category": "WordPress",
        "difficulty": "Medium"
    }
]