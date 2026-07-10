import Button from "../ui/Button";

export default function QuestionNavigation() {

    return (

        <section className="flex justify-between">

            <Button
                variant="secondary"
            >
                Previous
            </Button>

            <Button>

                Next

            </Button>

        </section>

    );

}