import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import ConversationItem from "./ConversationItem";
import type { Conversation } from "../../../types/dashboard";

interface Props {
    conversations: Conversation[];
}

export default function AIChatPreview({
    conversations,
}: Props) {
    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <div className="mb-6 flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                    AI Conversation
                </h3>

                <Link
                    to="/ai"
                    className="text-sm text-violet-400 hover:text-violet-300"
                >
                    View All
                </Link>

            </div>

            <div className="space-y-3">

                {conversations.map((conversation) => (

                    <ConversationItem
                        key={conversation.id}
                        title={conversation.title}
                        time={conversation.time}
                    />

                ))}

            </div>

            <Link
                to="/ai"
                className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    font-medium
                    text-violet-400
                    hover:text-violet-300
                "
            >
                Continue Conversation

                <ArrowRight size={18} />
            </Link>

        </div>
    );
}