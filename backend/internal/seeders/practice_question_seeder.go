package seeders

import (
	"github.com/ahmaddavid/gitgud/internal/models"
	"gorm.io/gorm"
)

func SeedPracticeQuestions(db *gorm.DB) {

	var count int64
	db.Model(&models.PracticeQuestion{}).Count(&count)

	if count > 0 {
		return
	}

	var goVariables models.Practice
	db.Where("slug = ?", "go-variables").First(&goVariables)

	var goFunctions models.Practice
	db.Where("slug = ?", "go-functions").First(&goFunctions)

	var goPointer models.Practice
	db.Where("slug = ?", "go-pointer").First(&goPointer)

	questions := []models.PracticeQuestion{

		// ==========================
		// GO VARIABLES
		// ==========================

		{
			PracticeID: goVariables.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which keyword is used to declare a variable in Go?",
			OptionA: "var",
			OptionB: "let",
			OptionC: "const",
			OptionD: "define",
			CorrectAnswer: "A",
			Explanation: "Go uses the var keyword.",
			OrderNumber: 1,
		},

		{
			PracticeID: goVariables.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which operator is used for short variable declaration?",
			OptionA: "=",
			OptionB: ":=",
			OptionC: "==",
			OptionD: "=>",
			CorrectAnswer: "B",
			Explanation: "Use := inside functions.",
			OrderNumber: 2,
		},

		{
			PracticeID: goVariables.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which data type stores true or false?",
			OptionA: "int",
			OptionB: "bool",
			OptionC: "string",
			OptionD: "float64",
			CorrectAnswer: "B",
			OrderNumber: 3,
		},

		{
			PracticeID: goVariables.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which type stores text?",
			OptionA: "string",
			OptionB: "text",
			OptionC: "char",
			OptionD: "byte",
			CorrectAnswer: "A",
			OrderNumber: 4,
		},

		{
			PracticeID: goVariables.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Can variables be reassigned?",
			OptionA: "Yes",
			OptionB: "No",
			OptionC: "Only float",
			OptionD: "Only int",
			CorrectAnswer: "A",
			OrderNumber: 5,
		},

		// ==========================
		// GO FUNCTIONS
		// ==========================

		{
			PracticeID: goFunctions.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which keyword declares a function?",
			OptionA: "function",
			OptionB: "func",
			OptionC: "fn",
			OptionD: "method",
			CorrectAnswer: "B",
			OrderNumber: 1,
		},

		{
			PracticeID: goFunctions.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Can Go return multiple values?",
			OptionA: "Yes",
			OptionB: "No",
			OptionC: "Only int",
			OptionD: "Only string",
			CorrectAnswer: "A",
			OrderNumber: 2,
		},

		{
			PracticeID: goFunctions.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Which package prints text?",
			OptionA: "fmt",
			OptionB: "print",
			OptionC: "io",
			OptionD: "text",
			CorrectAnswer: "A",
			OrderNumber: 3,
		},

		{
			PracticeID: goFunctions.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "What is the entry point of Go?",
			OptionA: "start()",
			OptionB: "run()",
			OptionC: "main()",
			OptionD: "init()",
			CorrectAnswer: "C",
			OrderNumber: 4,
		},

		{
			PracticeID: goFunctions.ID,
			Type: "multiple",
			Difficulty: "Easy",
			Question: "Functions may have parameters?",
			OptionA: "Yes",
			OptionB: "No",
			OptionC: "Only one",
			OptionD: "Only int",
			CorrectAnswer: "A",
			OrderNumber: 5,
		},

		// ==========================
		// GO POINTER
		// ==========================

		{
			PracticeID: goPointer.ID,
			Type: "multiple",
			Difficulty: "Medium",
			Question: "Pointer stores...",
			OptionA: "Value",
			OptionB: "Address",
			OptionC: "Type",
			OptionD: "Package",
			CorrectAnswer: "B",
			OrderNumber: 1,
		},

		{
			PracticeID: goPointer.ID,
			Type: "multiple",
			Difficulty: "Medium",
			Question: "Which symbol gets an address?",
			OptionA: "&",
			OptionB: "*",
			OptionC: "@",
			OptionD: "#",
			CorrectAnswer: "A",
			OrderNumber: 2,
		},

		{
			PracticeID: goPointer.ID,
			Type: "multiple",
			Difficulty: "Medium",
			Question: "Which symbol dereferences a pointer?",
			OptionA: "&",
			OptionB: "*",
			OptionC: "->",
			OptionD: ":=",
			CorrectAnswer: "B",
			OrderNumber: 3,
		},

		{
			PracticeID: goPointer.ID,
			Type: "multiple",
			Difficulty: "Medium",
			Question: "Pointers help avoid...",
			OptionA: "Copying values",
			OptionB: "Imports",
			OptionC: "Packages",
			OptionD: "Functions",
			CorrectAnswer: "A",
			OrderNumber: 4,
		},

		{
			PracticeID: goPointer.ID,
			Type: "multiple",
			Difficulty: "Medium",
			Question: "Nil pointer means...",
			OptionA: "Zero address",
			OptionB: "No address assigned",
			OptionC: "Error",
			OptionD: "Deleted",
			CorrectAnswer: "B",
			OrderNumber: 5,
		},
	}

	db.Create(&questions)
}