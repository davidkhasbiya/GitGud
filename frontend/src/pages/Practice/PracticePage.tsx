import { useEffect, useState } from "react";

import {
    PracticeGeneratorForm,
    PracticeHistory,
    PracticeRecommendation,
} from "../../components/practice";

import {
    getPractices,
    type Practice,
} from "../../services/practiceService";

export default function PracticePage() {

    const [practices, setPractices] = useState<Practice[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchPractices() {

            try {

                const data = await getPractices();

                setPractices(data);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        }

        fetchPractices();

    }, []);

    return (

        <div className="space-y-8">

            <PracticeGeneratorForm />

            <PracticeRecommendation />

            <PracticeHistory

                practices={practices}

                loading={loading}

            />

        </div>

    );

}