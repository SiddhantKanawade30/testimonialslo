
import { Video, User, Mail, Briefcase } from "lucide-react";
import { StarRating } from "@/components/ui/starRating";

export const VideoSpace = ({formData, setFormData , handleChange}:{formData: any, setFormData: any, handleChange:any}) => {

    return (
    <div>
                  {/* Large Video Recording Area */}
                  <div className="space-y-1.5 flex-shrink-0">
                    <label className="flex items-center gap-1.5 text-sm font-medium">
                      <Video className="h-4 w-4 text-muted-foreground" />
                      Record Video Testimonial *
                    </label>
                    <div className="w-full h-[300px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                      <div className="text-center p-6">
                        <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-base font-medium text-gray-700 mb-1">Video recording feature</p>
                        <p className="text-sm text-gray-500">Coming soon...</p>
                      </div>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="space-y-1.5 flex-shrink-0 pt-3">
                    <label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium">
                      <User className="h-4 w-4 text-muted-foreground" />
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent pl-10 pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                        placeholder="Full name"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 flex-shrink-0">
                    <label htmlFor="email" className="flex items-center gap-1.5 text-sm font-medium">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent pl-10 pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                        placeholder="your@email.com"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Position */}
                  <div className="space-y-1.5 flex-shrink-0">
                    <label htmlFor="position" className="flex items-center gap-1.5 text-sm font-medium">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      Your Position * <span> <p className="text-xs text-muted-foreground">( Enter your job title and company )</p></span>
                    </label>
                    <div className="relative">
                      <input
                        id="position"
                        name="position"
                        type="text"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent pl-10 pr-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                        placeholder="e.g., CEO at Apple"
                      />
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {/* Star Rating */}
                  <StarRating
                    value={formData.rating}
                    onChange={(rating) => setFormData({ ...formData, rating })}
                    required
                  />
                </div>
    )
}