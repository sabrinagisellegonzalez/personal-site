import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type Props = {
    className?: string
}
export const ExploreMoreArrows = ({className}: Props) => {
    return ( 
        <div className={cn("flex flex-col items-center justify-center", className)}>
            <ChevronDown className="animate-bounce delay-200 text-primary" size={32} />
            <ChevronDown className="animate-bounce -mt-4 delay-100 text-primary" size={32} />
            <ChevronDown className="animate-bounce -mt-4 text-primary" size={32} />
        </div>
    );
}