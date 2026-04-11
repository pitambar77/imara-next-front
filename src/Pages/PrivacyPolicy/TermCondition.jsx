import React from "react";


const TermCondition = () => {
  return (
    <>
      {/* Banner */}
      <div
        className="relative w-full h-[40vh] md:h-[64vh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url('/terms.webp')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <h1 className="text-3xl md:text-5xl text-white uppercase z-10">
          Terms & Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="py-8 sm:py-12 md:py-16 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 lg:px-18 xl:px-0 space-y-10">
        <section>
          <p>
            The main role of Imara Kileleni Safaris is to create and operate
            customer-oriented tours and itineraries.
          </p>
          <p className="mt-2">
            Clients receive a detailed itinerary at the time of booking that
            includes details of accommodation and activities.
          </p>
          <p className="mt-2">
            The safari services agreed with the client will be provided, except
            in the event of unforeseen circumstances, such as road closures, bad
            weather, problems, or security concerns. In such cases the itinerary
            may be changed, at the discretion of the company, clients informed,
            and alternative arrangements made as circumstances permit.
          </p>
          <p className=" mt-2">
            Imara Kileleni Safaris will make every reasonable effort to ensure
            the same quality and character of the itinerary.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl  mb-2 capitalize">
            General Information, Terms And Responsibilities:
          </h2>
          <h2 className="md:text-2xl  mb-2">
            Registration And Participation Conditions:
          </h2>
          <p>
            The traveller’s registration for the trip or payment of the advance
            (see below “payment terms”) or the traveller’s participation in the
            trip or part thereof expresses the traveller’s full and explicit
            consent to all conditions specified later in this document and on
            the itineraries on the site, subject to updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Prices</h2>
          <p>
            All prices are given in US dollars (USD) per person unless specified
            as the group. Prices are based on costs at the time of publication.
            In creating your desired tour and itinerary, we may use independent
            suppliers.
          </p>
          <p className=" mt-2">
            The price of your itinerary will be based on known costs at the date
            of issue of the itinerary.
          </p>

          <h3 className="font-semibold mt-4">Prices in general include:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Park entrance fees (unless stated otherwise);</li>
            <li>Service charges;</li>
            <li>Ground transport & airport transfers;</li>
            <li>Accommodation as indicated;</li>
            <li>Government taxes and fees</li>
            <li>English speaking tour guides/drivers/guides/porters.</li>
            <li>Additional languages can be arranged at request;</li>
            <li>4×4 vehicle and all associated expenses while on tour;</li>
            <li>
              Unlimited game-viewing between the hours of 06:00 and 18:00;
            </li>
            <li>International flights (can be arranged upon request)</li>
            <li>Visas (can be processed upon request)</li>
            <li>Toiletries and items of a personal nature</li>
            <li>Tips and gratuities</li>
            <li>Souvenirs</li>
            <li>Soft drinks</li>
            <li>Alcoholic beverages</li>
            <li>Laundry services</li>
            <li>Travel and personal insurance</li>
          </ul>
          <p className=" mt-3">
            Any tour or service not specifically mentioned as included in your
            itinerary.
          </p>
          <p className=" mt-2">
            In the event that an item is not specifically mentioned in the
            above, it is automatically included in the list of exclusions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              After booking you will receive an invoice from Imara Kileleni
              Safaris.
            </li>
            <li>
              Upon receipt of your invoice, you will have to pay a deposit of
              30% of the total to confirm your booking.
            </li>
            <li>
              The balance of your payment must be paid a minimum 30 days before
              the beginning of your tour.
            </li>
            <li>
              In the event payment has not been received on time, we reserve the
              right to cancel all bookings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Method Of Payment</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Payment can be made via bank or wire transfer or via credit card.
            </li>
            <li>Credit card payments attract a surcharge of 4%</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Booking Conditions</h2>
          <p>
            Bookings should be made as early as possible to guarantee the
            desired tour, itinerary, and departure date.
          </p>
          <p className="mt-2">
            At the time of booking, you will also need to give us the
            information about each client’s nationality and date of birth. We
            may also require you to provide us with passport numbers and/or
            scanned copies of passport photo pages for all members of your
            party. It is your responsibility to make sure that you have the
            correct names, nationality and dates of birth for each client who is
            traveling with you.
          </p>
          <p className="mt-2">
            Confirmed tours and itineraries cannot be transferred to any other
            date. You must check what is included in the price and inform us
            before booking if you do not agree or if something is not clear.
            Later complaints after booking will not be considered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Cancellation Fee</h2>
          <p>
            In the event that you cancel your booking, in full or partially, for
            any reason whatsoever we will levy cancellation charges as defined
            in the section below.
          </p>

          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>65+ days before departure: Deposit non-refundable</li>
            <li>50-65 days before departure: 50% of the itinerary cost</li>
            <li>0-50 days before departure: 100% of the itinerary cost</li>
          </ul>
          <p>
            After your booking has been confirmed, should you wish to make any
            changes to your itinerary or wish an earlier departure date, we will
            make every effort to accommodate your requests based on
            availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Liability And Our Responsibilities
          </h2>
          <div className=" space-y-5">
            <p>
              Imara Kileleni Safaris, its agents and sub-contractors act only as
              the passenger’s agents in matters relating the tours, itineraries,
              hotel accommodation, transportation etc., and shall not in any way
              be liable for injury, death, illness, delays, subsequent missing
              air or train connection, inconveniences arising from unannounced
              alteration of air or train schedules, weather conditions, loss or
              damage to personal property whether resulting from but not limited
              to force majeure or acts of God, civil unrest or revolt, acts of
              war, strikes or other labour activities, animals, any criminal or
              terrorist activities, or epidemic or pandemic outbreaks.
            </p>
            <p>
              The company is also not responsible for any overbooking or
              downgrading of any services or accommodation, mechanical or other
              failure of any means of transportation or failure of any
              transportation resulting in arrival or departure delay.
            </p>
            <p>
              Imara Kileleni Safaris reserves the right to employ independent
              suppliers or sub- contractors for all or part of the arranged
              services, Our brochure descriptions and other information provided
              or made available in a resort or hotel, often refer to “other
              activities and excursions”, which are available at the property.
            </p>
            <p>
              Accordingly, we regret that Imara Kileleni Safaris cannot accept
              any liability in relation to these outside activities and
              excursions. Where we make or take any bookings for or from you in
              respect of any activity or excursion available, we do solely as
              booking agents. This is the case regardless of whether the
              activity is advertised or mentioned in our brochure, resort, on
              our website, or elsewhere. Your contract for any such activity or
              excursion will be with the supplier or operator of that activity
              or excursion.
            </p>
            <p>
              The company cannot be responsible for loss or damage to any
              luggage or equipment carried while on tour.
            </p>
            <p>
              Imara Kileleni Safaris cannot be responsible for any willful or
              negligent act or inaction of any person or entity clearly not in
              their control, or of any other sub- contractors or third party not
              under their control.
            </p>

            <p>
              Please keep in mind that we are only responsible for those
              services which were arranged, agreed and/or provided on your
              behalf. Any services which you arrange on your own are out of our
              liability and responsibility. This includes, for example any
              additional services or facilities, which your hotel or other
              supplier agrees to provide for you where the services or
              facilities are not advertised in our brochure and we have not
              agreed to arrange them.
            </p>

            <p>
              Please note that we will not be responsible for any injury,
              illness, death, loss (for example loss of enjoyment), damage,
              expense, cost or other sum or claim of any description whatsoever
              which results from any of the following:
            </p>
          </div>
          <ul className="list-disc pl-6 space-y-1 my-4">
            <li>
              {" "}
              The fault of the persons affected or any members of their party,
              or
            </li>
            <li>
              The fault of a third party not connected with the provision of
              your holiday, which we could not have predicted or avoided, or
            </li>
            <li>
              {" "}
              An event or circumstances which we or the supplier of the services
              in question could not have predicted or avoided, even after taking
              all reasonable care.
            </li>
            <li>
              {" "}
              The fault of anyone who is not carrying out work for us (generally
              or in particular) at the time.
            </li>
          </ul>
          <div className=" space-y-5">
            <p>
              In addition, we will not be responsible where you do not enjoy
              your holiday or suffer problems because of a reason you did not
              tell us about when you booked your holiday, or where any problems
              you suffered did not arise from any breach of our contract, or
              other fault of ourselves or where we were responsible for them,
              our suppliers or agents or where any losses, expenses, costs or
              other sum you have suffered relate to any business.
            </p>
            <p>
              We accept responsibility for the negligent acts of our employees,
              agents and direct suppliers, which results in death, injury or
              illness. Our liability shall be limited to 100% of the holiday
              price for any claim other than those involving injury or death
              arising from our negligence.
            </p>
            <p>
              Our suppliers, such as accommodation or transport suppliers, have
              their own booking conditions or conditions of carriage, and these
              conditions are binding between you and the supplier. Some of these
              conditions may limit or remove the relevant transport providers or
              other suppliers’ liability to you. You can get copies of such
              conditions from any offices of the relevant suppliers.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Insurance</h2>
          <p>
            Travelers must obtain comprehensive travel and medical insurance.
            The company bears no liability for uninsured losses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            National Park Rules And Baggage Restrictions
          </h2>
          <div className=" space-y-4">
            <p>
              Clients whose trip includes a visit to one or more National Parks
              and/or Conservation Areas must follow the rules and restrictions
              of the individual National Park and/or Conservation Area.
            </p>
            <p>
              In case of rule violation, clients must pay a fine to the National
              Park. We are not responsible for said fines, the instructions of
              guides and drivers must be followed.
            </p>
            <p>
              Our safari vehicles have limited space, so baggage and luggage are
              restricted to one normal size suitcase, soft bag, or backpack, and
              one small backpack per person.
            </p>
            <p>
              Baggage weight on all scheduled flights within the parks and
              trekking trips is limited to one bag of 15 kg per person. In case
              your baggage exceeds 15 kg, you will have to pay the cost for an
              additional porter on trekking trips and/or additional costs on all
              scheduled flights depending on the airline’s rules (you will get
              specific details on your itinerary).
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Health:</h2>
          <p>
            In principle, there are no special guidelines regarding health or
            mandatory vaccinations, it is advisable to consult one of the
            regional health bureaus, the health funds or the travellers’
            clinics.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Passport And Entry Visas:
          </h2>
          <p>
            Have a valid passport for at least half a year, and make sure it has
            at least two blank pages. Issuance of a passport and / or extension
            is the sole responsibility of the traveller.
          </p>
          <p>
            A $ 50 entry visa is required that is not included in the trip
            price. Will send a link to pay by visa online
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">FLIGHTS:</h2>
          <p>
            A change in the scheduled flight schedule made by the airline at the
            90th minute may result in a change in the length of the trip and
            changes in the route. If possible, the price of the trip will be
            updated accordingly. Notification of a change in the flight schedule
            is possible at very short notice. A traveller who cancels a trip due
            to an insignificant change from the changes listed above will be
            charged a cancellation fee according to the advertised price terms.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Change In Airline Schedule:
          </h2>
          <p>
            If the airlines’ schedule changes, the route will be adjusted to the
            new schedule, if the change results in the addition or reduction of
            nights at the beginning or end of the trip, the price will be
            updated accordingly.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Change In Prices</h2>
          <p>
            The total price of the trip (flights, ground services, registration
            fees, port taxes and security and fuel levies) is updated from time
            to time. The price of flights is based on fares and airline
            policies, as of the day the trip is announced.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Entering And Leaving Rooms In Hotels
          </h2>
          <p>
            In the case of flights arriving at the destination in the early
            morning or leaving late in the evening, the company will make an
            effort to get early entry into the rooms (at least some of them) or
            late evacuation of the rooms (at least some of them) by a few hours.
            In any case, the company does not undertake to provide the rooms
            immediately upon arrival or to allow a late stay in the rooms until
            the time of flight.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Tip</h2>
          <p>
            Tip (tip) – as required by the conditions on each trip and outing.
            The tip is not part of the cost of the trip and is paid by the
            caster at his discretion
          </p>
          <p className=" mt-3">
            Payment will be made in dollars and by bank transfer to the
            company’s account in Tanzania
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Emergencies</h2>
          <p>
            We will be entitled to notify the cancellation of a trip, in whole
            or in part, even at very short notice, if at our sole and absolute
            discretion it cannot be carried out or there is an impediment or
            danger in carrying it out, in circumstances beyond our control,
            including strikes, warnings, instructions from competent
            authorities, plagues, Natural disasters, situations of war and
            emergencies, etc. In any case, as stated, we will not be responsible
            for any damage,
          </p>
          <p className=" mt-3">
            Direct or indirect, or inconvenience due to full or partial
            cancellation. In the event of such full cancellation, the traveller
            will be refunded the funds paid to the actual company, offsetting
            any expense incurred by the company (including the company’s
            liability) and for which it did not receive a refund. If a trip is
            partially cancelled, the traveller will be reimbursed for the land
            services that he did not use only, offsetting those for which the
            company will not receive a refund. In any case where a traveller
            decides to cancel his departure for a trip, including for the above
            reasons, the provisions detailed in the price list regarding the
            possibility of cancellation will apply to him.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Warranty And Insurance
          </h2>
          <p>
            The company will not be liable for any damage, direct or indirect,
            to body or property, caused to the traveller during the trip or due
            to its cancellation or changes, for any reason, including due to
            accident, theft, loss of luggage or documents or expenses the
            traveller had to incur for them.
          </p>
          <p className=" mt-3">
            If the company has incurred any expense for the traveller, the
            traveller will be liable for its full return to the company, and has
            not been returned to the company. The traveller undertakes to
            purchase for himself and for him full insurance suitable for the
            body and property, without the right of return towards the company
            or anyone on its behalf.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Documentation</h2>
          <p>
            Clients are obligated to carry proper documentation showing their
            citizenship, such as a passport. Please keep in mind that it is your
            responsibility to carry proper documentation, which should be valid
            for at least six months after your arrival. If you have any
            questions regarding entry requirements to any country in your
            itinerary, you should contact the nearest embassy or your country.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Applicable Laws</h2>
          <p>
            The above booking terms and conditions together with all
            correspondence form part of your contract with Imara Kileleni
            Safaris. This contract and any matters arising from it shall be
            governed by and interpreted in accordance with United Republic of
            Tanzania laws and the courts of United Republic of Tanzania shall
            have exclusive jurisdiction to hear any and all proceedings between
            us either relating to our contract or arising out of it.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermCondition;
